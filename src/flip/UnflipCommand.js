const {SOLEMN, RAGE, getFace} = require("../Faces");
const {
  TABLE,
  PERSON,
  PHRASE,
} = require('./FlipableItems');
const CommandError = require('../CommandError');

const AVAILABLE_COMMANDS = ['-table', '-rage'];

const actuallyParseUnFlipArguments = unflipArgumentToParse => {
  const parsedArguments = unflipArgumentToParse.split(" ");
  const argumentProjection = parsedArguments.reduce((builtArguments, currentString) => {
    if (currentString === '-table') {
      builtArguments.flippedItem = {type: TABLE};
    } else if (currentString === '-rage') {
      builtArguments.face = {type: RAGE}
    } else if (currentString.startsWith('-')) {
      throw new CommandError(`Unknown Argument: ${currentString}`, `Available Arguments: ${AVAILABLE_COMMANDS.join(', ').trimRight()}`)
    } else if(builtArguments.flippedItem.type === PHRASE){
      builtArguments.flippedItem.payload += `${currentString} `
    }
    return builtArguments
  }, {
    flippedItem: {
      type: PHRASE,
      payload: '',
    },
    face: {
      type: SOLEMN
    },
  });
  return Promise.resolve(argumentProjection);
};

const parseUnFlipArguments = unflipArguments => {
  return Promise.resolve(unflipArguments)
    .then(unflipArgument => {
      if (unflipArgument.indexOf('-') > -1) {
        return actuallyParseUnFlipArguments(unflipArgument);
      } else {
        return {
          flippedItem: {
            type: PHRASE,
            payload: unflipArgument,
          },
          face: {
            type: SOLEMN
          },
        }
      }
    });
};

const getUnFlippedItem = item => {
  switch (item.type) {
    case TABLE:
      return '┳━┳';
    case PERSON:
      return '(*￣m￣)';
    case PHRASE:
      return item.payload.trimRight();
  }
};

const extractUnFlipExpressionParts = flipArguments => {
  return parseUnFlipArguments(flipArguments)
    .then(parsedArguments => {
      const face = getFace(parsedArguments.face.type);
      const unFlippedItem = getUnFlippedItem(parsedArguments.flippedItem);
      return {
        face,
        unFlippedItem
      };
    });
};


const unFlipCommand = flipArguments => {
  return extractUnFlipExpressionParts(flipArguments)
    .then(({face, unFlippedItem}) => `${unFlippedItem}ノ(${face}ノ)`);
};

module.exports = {
  unFlipCommand
};
