import {Command} from '../Command';
import CommandError from '../CommandError';
import {
  ALARMED,
  ANGUISH,
  COOL,
  getFace,
  HAPPY,
  LENNY, LOOK, PRETTY,
  PUPPY,
  RAGE,
  SMILE,
  SOLEMN,
  STRAINED,
  U_CANT_BE_SRS,
  YELLING,
} from '../Faces';
import {PERSON, PHRASE, TABLE} from './FlipableItems';
import {flipWord} from './WordFlip';

const extractFlipExpressionParts = flipArguments => {
  return parseFlipArguments(flipArguments)
    .then(parsedArguments => {
      const direction = parsedArguments.direction.type;
      const face = getFace(`${parsedArguments.face.type}_${direction}`) ||
        getFace(parsedArguments.face.type);
      const velocity = getVelocity(`${parsedArguments.velocity.type}_${direction}`) ||
        getVelocity(parsedArguments.velocity.type);
      const flippedItem = getFlippedItem(parsedArguments.flippedItem);
      return {
        face,
        velocity,
        flippedItem,
        direction,
      };
    });
};

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

const AVAILABLE_COMMANDS = [
  '-table',
  '-rage',
  '-alarmed',
  '-lenny',
  '-anguish',
  '-left',
  '-smile',
  '-happy',
  '-force',
  '-cool',
  '-puppy',
  '-strained',
  '-pretty',
  '-look',
  '-deadpan',
  '-help',
];

const RIGHT = 'RIGHT';
const LEFT = 'LEFT';

function getAvailableArgumentsString() {
  return `Available Arguments: ${AVAILABLE_COMMANDS.join(', ').trim()}`;
}

const actuallyParseArguments = flipArgumentToParse => {
  const parsedArguments = flipArgumentToParse.split(' ');
  const argumentProjection = parsedArguments.reduce((builtArguments, currentString) => {
    if (currentString === '-table') {
      builtArguments.flippedItem = {type: TABLE};
    } else if (currentString === '-rage') {
      builtArguments.velocity = {type: FORCEFUL_VELOCITY};
      builtArguments.face = {type: RAGE};
    } else if (currentString === '-alarmed') {
      builtArguments.velocity = {type: FORCEFUL_VELOCITY};
      builtArguments.face = {type: ALARMED};
    } else if (currentString === '-solemn') {
      builtArguments.face = {type: SOLEMN};
    } else if (currentString === '-lenny') {
      builtArguments.face = {type: LENNY};
    } else if (currentString === '-anguish') {
      builtArguments.face = {type: ANGUISH};
    } else if (currentString === '-left') {
      builtArguments.direction = {type: LEFT};
    } else if (currentString === '-force') {
      builtArguments.velocity = {type: FORCEFUL_VELOCITY};
    } else if (currentString === '-smile') {
      builtArguments.face = {type: SMILE};
    } else if (currentString === '-look') {
      builtArguments.face = {type: LOOK};
    } else if (currentString === '-happy') {
      builtArguments.face = {type: HAPPY};
    } else if (currentString === '-deadpan') {
      builtArguments.face = {type: U_CANT_BE_SRS};
    } else if (currentString === '-pretty') {
      builtArguments.face = {type: PRETTY};
    } else if (currentString === '-cool') {
      builtArguments.face = {type: COOL};
    } else if (currentString === '-puppy') {
      builtArguments.face = {type: PUPPY};
    } else if (currentString === '-strained') {
      builtArguments.velocity = {type: FORCEFUL_VELOCITY};
      builtArguments.face = {type: STRAINED};
    } else if (currentString === '-help') {
      throw new CommandError(`Flip Usage`, getAvailableArgumentsString());
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
      type: NORMAL_VELOCITY,
    },
    face: {
      type: YELLING,
    },
    direction: {
      type: RIGHT,
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

const getNoArgumentFlippedItem = (flipArgument: string) =>
  !flipArgument ? ({type: TABLE}) : ({
    type: PHRASE,
    payload: flipArgument,
  });

const parseFlipArguments = flipArguments => {
  return Promise.resolve(flipArguments)
    .then(flipArgument => {
      if (flipArgument.indexOf('-') > -1) {
        return actuallyParseArguments(flipArgument);
      } else {
        return {
          flippedItem: getNoArgumentFlippedItem(flipArgument),
          velocity: {
            type: NORMAL_VELOCITY,
          },
          face: {
            type: YELLING,
          },
          direction: {
            type: RIGHT,
          },
        };
      }
    });
};

export const flipCommand: Command = flipArguments => {
  return extractFlipExpressionParts(flipArguments)
    .then(({face, velocity, flippedItem, direction}) => {
      return direction === RIGHT ? `(╯${face})╯${velocity}${flippedItem}` :
        `${flippedItem}${velocity}└(${face}└)`;
    });
};
