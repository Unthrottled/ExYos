const {SOLEMN, getFace} = require("../Faces");
const {
  TABLE,
  PERSON,
  PHRASE,
} = require('./FlipableItems');
const CommandError = require('../CommandError');

const actuallyParseUnFlipArguments = argumentsToParse => {
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
    face: {
      type: SOLEMN
    },
  });
  return Promise.resolve(argumentProjection);
};

const parseUnFlipArguments = unflipArguments => {
  return Promise.resolve(unflipArguments)
    .then(arguments => {
      if (arguments.indexOf('-') > -1) {
        return actuallyParseUnFlipArguments(arguments);
      } else {
        return {
          flippedItem: {
            type: PHRASE,
            payload: arguments,
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
      return item.payload;
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
