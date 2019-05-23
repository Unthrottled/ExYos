const {flipWord} = require('./WordFlip');

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

const YELLING = 'YELLING';
const LOOK = 'LOOK';
const RAGE = 'RAGE';
const ALARMED = 'ALARMED';
const LENNY = 'LENNY';
const U_CANT_BE_SRS = 'U_CANT_BE_SRS';
const SOLEMN = 'SOLEMN';
const getFace = faceType => {
  switch (faceType) {
    case YELLING:
      return '°□°';
    case LOOK:
      return 'ಠ_ಠ';
    case LENNY:
      return '͡° ͜ʖ ͡°';
    case RAGE:
      return 'ಠ益ಠ';
    case ALARMED:
      return '◉Д◉';
    case U_CANT_BE_SRS:
      return '●_●';
    case SOLEMN:
      return 'º _ º';
  }
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

const TABLE = 'TABLE';
const PERSON = 'PERSON';
const PHRASE = 'PHRASE';
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

function CommandError(failureResponse, tip) {
  this.failureResponse = failureResponse;
  this.tip = tip;
  return this;
}

const actuallyParseArguments = argumentsToParse => {
  const parsedArguments = argumentsToParse.split(" ");
  const argumentProjection = parsedArguments.reduce((builtArguments, currentString) => {
    if (currentString === '-table') {
      builtArguments.flippedItem = {type: TABLE};
    } else if (currentString.startsWith('-')) {
      throw new CommandError(`Unknown command: ${currentString}`)
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

const actuallyParseUnFlipArguments = argumentsToParse => {
  const parsedArguments = argumentsToParse.split(" ");
  const argumentProjection = parsedArguments.reduce((builtArguments, currentString) => {
    if (currentString === '-table') {
      builtArguments.flippedItem = {type: TABLE};
    } else if (currentString.startsWith('-')) {
      throw new CommandError(`Unknown command: ${currentString}`)
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

const flipCommand = flipArguments => {
  return extractFlipExpressionParts(flipArguments)
    .then(({face, velocity, flippedItem}) => `(╯${face})╯${velocity}${flippedItem}`);
};

const unFlipCommand = flipArguments => {
  return extractUnFlipExpressionParts(flipArguments)
    .then(({face, unFlippedItem}) => `${unFlippedItem}ノ(${face}ノ)`);
};

module.exports = {
  flipCommand,
  unFlipCommand,
};
