const {YELLING, RAGE, getFace} = require("../Faces");
const {
  TABLE,
  PERSON,
  PHRASE,
} = require('./FlipableItems');
const {flipWord} = require('./WordFlip');
const CommandError = require('../CommandError');

const extractFlipExpressionParts = flipArguments => {
  return parseFlipArguments(flipArguments)
    .then(parsedArguments => {
      const face = getFace(parsedArguments.face.type);
      const velocity = getVelocity(parsedArguments.velocity.type);
      const flippedItem = getFlippedItem(parsedArguments.flippedItem);
      return {
        face,
        velocity,
        flippedItem
      }
    });
};

const NORMAL_VELOCITY = 'NORMAL_VELOCITY';
const FORCEFUL_VELOCITY = 'FORCEFUL_VELOCITY';
const getVelocity = velocityType => {
  switch (velocityType) {
    case NORMAL_VELOCITY:
      return '︵';
    case FORCEFUL_VELOCITY:
      return '彡';
  }
};


const getFlippedItem = item => {
  switch (item.type) {
    case TABLE:
      return '┻━┻';
    case PERSON:
      return '/(.□ . \\)';
    case PHRASE:
      return flipWord(item.payload.trim());
  }
};

const actuallyParseArguments = flipArgumentToParse => {
  const parsedArguments = flipArgumentToParse.split(" ");
  const argumentProjection = parsedArguments.reduce((builtArguments, currentString) => {
    if (currentString === '-table') {
      builtArguments.flippedItem = {type: TABLE};
    } else if (currentString === '-rage') {
      builtArguments.velocity = {type: FORCEFUL_VELOCITY};
      builtArguments.face = {type: RAGE}
    } else if (currentString.startsWith('-')) {
      throw new CommandError(`Unknown Argument: ${currentString}`, 'Available Arguments: -table')
    } else if(builtArguments.flippedItem.type === PHRASE){
      builtArguments.flippedItem.payload += `${currentString} `
    }
    return builtArguments
  }, {
    flippedItem: {
      type: PHRASE,
      payload: '',
    },
    velocity: {
      type: NORMAL_VELOCITY
    },
    face: {
      type: YELLING
    },
  });
  return Promise.resolve(argumentProjection);
};

const parseFlipArguments = flipArguments => {
  return Promise.resolve(flipArguments)
    .then(flipArgument => {
      if (flipArgument.indexOf('-') > -1) {
        return actuallyParseArguments(flipArgument);
      } else {
        return {
          flippedItem: {
            type: PHRASE,
            payload: flipArgument,
          },
          velocity: {
            type: NORMAL_VELOCITY
          },
          face: {
            type: YELLING
          },
        }
      }
    });
};

const flipCommand = flipArguments => {
  return extractFlipExpressionParts(flipArguments)
    .then(({face, velocity, flippedItem}) => `(╯${face})╯${velocity}${flippedItem}`);
};


module.exports = {
  flipCommand
};
