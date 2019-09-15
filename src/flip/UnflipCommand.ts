import {Command} from '../Command';
import CommandError from '../CommandError';
import {
  ALARMED,
  ANGUISH,
  COOL,
  getFace,
  HAPPY,
  LENNY,
  LOOK,
  PRETTY,
  PUPPY,
  RAGE,
  SMILE,
  SOLEMN,
  STRAINED,
  U_CANT_BE_SRS,
} from '../Faces';
import {PERSON, PHRASE, TABLE} from './FlipableItems';
import {constructFlip} from './FlipCommand';

const RIGHT = 'RIGHT';
const LEFT = 'LEFT';

const AVAILABLE_COMMANDS = [
  '-table',
  '-rage',
  '-alarmed',
  '-lenny',
  '-right',
  '-flip',
  '-throw',
  '-anguish',
  '-smile',
  '-happy',
  '-cool',
  '-puppy',
  '-strained',
  '-pretty',
  '-look',
  '-deadpan',
  '-help'];

const getAvailableArgumentsString = () =>
  `Available Arguments: ${AVAILABLE_COMMANDS.join(', ').trim()}`;

const NO_VELOCITY = 'NO_VELOCITY';
const NORMAL_VELOCITY = 'NORMAL_VELOCITY';
const FORCEFUL_VELOCITY = 'FORCEFUL_VELOCITY';
const FORCEFUL_VELOCITY_LEFT = 'FORCEFUL_VELOCITY_LEFT';
const getVelocity = velocityType => {
  switch (velocityType) {
    case NORMAL_VELOCITY:
      return '︵';
    case FORCEFUL_VELOCITY:
      return '彡';
    case FORCEFUL_VELOCITY_LEFT:
      return 'ミ';
    default:
      return false;
  }
};

const actuallyParseUnFlipArguments = unflipArgumentToParse => {
  const parsedArguments = unflipArgumentToParse.split(' ');
  const argumentProjection = parsedArguments.reduce((builtArguments, currentString) => {
    if (currentString === '-table') {
      builtArguments.flippedItem = {type: TABLE};
    } else if (currentString === '-rage') {
      builtArguments.face = {type: RAGE};
    } else if (currentString === '-alarmed') {
      builtArguments.face = {type: ALARMED};
    } else if (currentString === '-solemn') {
      builtArguments.face = {type: SOLEMN};
    } else if (currentString === '-lenny') {
      builtArguments.face = {type: LENNY};
    } else if (currentString === '-anguish') {
      builtArguments.face = {type: ANGUISH};
    } else if (currentString === '-smile') {
      builtArguments.face = {type: SMILE};
    } else if (currentString === '-look') {
      builtArguments.face = {type: LOOK};
    } else if (currentString === '-happy') {
      builtArguments.face = {type: HAPPY};
    } else if (currentString === '-flip') {
      builtArguments.velocity = {type: NORMAL_VELOCITY};
    } else if (currentString === '-throw') {
      builtArguments.velocity = {type: FORCEFUL_VELOCITY};
    } else if (currentString === '-right') {
      builtArguments.direction = {type: RIGHT};
    } else if (currentString === '-deadpan') {
      builtArguments.face = {type: U_CANT_BE_SRS};
    } else if (currentString === '-pretty') {
      builtArguments.face = {type: PRETTY};
    } else if (currentString === '-cool') {
      builtArguments.face = {type: COOL};
    } else if (currentString === '-puppy') {
      builtArguments.face = {type: PUPPY};
    } else if (currentString === '-strained') {
      builtArguments.face = {type: STRAINED};
    }  else if (currentString === '-help') {
      throw new CommandError(`Un-Flip Usage`, getAvailableArgumentsString());
    } else if (currentString.startsWith('-')) {
      throw new CommandError(`Unknown Argument: ${currentString}`, getAvailableArgumentsString());
    } else if (builtArguments.flippedItem.type === PHRASE) {
      builtArguments.flippedItem.payload += `${currentString} `;
    }
    return builtArguments;
  }, {
    flippedItem: {
      type: PHRASE,
      payload: '',
    },
    velocity: {
      type: NO_VELOCITY,
    },
    face: {
      type: SOLEMN,
    },
    direction: {
      type: LEFT,
    },
  });
  return Promise.resolve(argumentProjection)
    .then(argumentProj => {
      const {flippedItem: {type, payload}} = argumentProj;
      if (type === PHRASE && !payload) {
        return {
          ...argumentProj,
          flippedItem: {type: TABLE},
        };
      } else {
        return argumentProj;
      }
    });
};

const getNoArgumentUnFlippedItem = (unFlipArgument: string) =>
  !unFlipArgument ? ({type: TABLE}) : ({
    type: PHRASE,
    payload: unFlipArgument,
  });

const parseUnFlipArguments = unflipArguments => {
  return Promise.resolve(unflipArguments)
    .then(unflipArgument => {
      if (unflipArgument.indexOf('-') > -1) {
        return actuallyParseUnFlipArguments(unflipArgument);
      } else {
        return {
          flippedItem: getNoArgumentUnFlippedItem(unflipArgument),
          face: {
            type: SOLEMN,
          },
          direction: {
            type: LEFT,
          },
          velocity: {
            type: NO_VELOCITY,
          },
        };
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
      const direction = parsedArguments.direction.type;
      const face = getFace(`${parsedArguments.face.type}_${direction}`) ||
        getFace(parsedArguments.face.type);
      const unFlippedItem = getUnFlippedItem(parsedArguments.flippedItem);
      const velocity = getVelocity(`${parsedArguments.velocity.type}_${direction}`) ||
        getVelocity(parsedArguments.velocity.type);
      return {
        face,
        unFlippedItem,
        direction,
        velocity,
      };
    });
};

export const unFlipCommand: Command = flipArguments => {
  return extractUnFlipExpressionParts(flipArguments)
    .then(({face, velocity, unFlippedItem, direction}) => {
      if (velocity) {
        return constructFlip({
          face, velocity, flippedItem: unFlippedItem, direction,
        });
      } else {
        return direction === RIGHT ? `(ヽ${face})ヽ${unFlippedItem}` :
          `${unFlippedItem}ノ(${face}ノ)`;

      }
    });
};
