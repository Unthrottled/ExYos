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

// {
//   tip: 'aoeu',
//   failureResponse: 'You did it wrongS'
// }

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

const parseFlipArguments = flipArguments => {
  return Promise.resolve(flipArguments)
    .then(arguments => {
      if (arguments.indexOf('-') > -1) {
        return {
          flippedItem: {
            type: TABLE
          },
          velocity: {
            type: FORCEFUL_VELOCITY
          },
          face: {
            type: YELLING
          },
        }
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

const extractUnFlipExpressionParts = flipArguments => {
  return parseUnFlipArguments(flipArguments)
    .then(parsedArguments => {
      const face = 'º _ º' || '°□°' || 'ಠ_ಠ' || 'ಠ益ಠ' || '◉Д◉';
      const unFlippedItem = flipArguments || '┳━┳' || '(*￣m￣)';
      return {
        face,
        unFlippedItem
      }
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
