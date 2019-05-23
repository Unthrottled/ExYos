const {YELLING, getFace} = require("../Faces");
const {
  TABLE,
  PERSON,
  PHRASE,
} = require('./FlipableItems');
const {flipWord} = require('./WordFlip');
const {unFlipCommand} = require('./UnflipCommand');
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
      return flipWord(item.payload);
  }
};

const actuallyParseArguments = argumentsToParse => {
  const parsedArguments = argumentsToParse.split(" ");
  const argumentProjection = parsedArguments.reduce((builtArguments, currentString) => {
    if (currentString === '-table') {
      builtArguments.flippedItem = {type: TABLE};
    } else if (currentString.startsWith('-')) {
      throw new CommandError(`Unknown Argument: ${currentString}`, 'Available Arguments: -table')
    }
    return builtArguments
  }, {
    flippedItem: {
      type: TABLE
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
    .then(arguments => {
      if (arguments.indexOf('-') > -1) {
        return actuallyParseArguments(arguments);
      } else {
        return {
          flippedItem: {
            type: PHRASE,
            payload: arguments,
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
  flipCommand,
  unFlipCommand,
};
