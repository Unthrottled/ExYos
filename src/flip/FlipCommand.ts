import {Command} from "../Command";
import CommandError from "../CommandError";
import {ALARMED, getFace, RAGE, YELLING} from "../Faces";
import {PERSON, PHRASE, TABLE} from "./FlipableItems";
import {flipWord} from "./WordFlip";

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
      };
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

const AVAILABLE_COMMANDS = ['-table', '-rage', '-alarmed', '-help'];

function getAvailableArgumentsString() {
  return `Available Arguments: ${AVAILABLE_COMMANDS.join(', ').trim()}`;
}

const actuallyParseArguments = flipArgumentToParse => {
  const parsedArguments = flipArgumentToParse.split(" ");
  const argumentProjection = parsedArguments.reduce((builtArguments, currentString) => {
    if (currentString === '-table') {
      builtArguments.flippedItem = {type: TABLE};
    } else if (currentString === '-rage') {
      builtArguments.velocity = {type: FORCEFUL_VELOCITY};
      builtArguments.face = {type: RAGE};
    } else if (currentString === '-alarmed') {
      builtArguments.velocity = {type: FORCEFUL_VELOCITY};
      builtArguments.face = {type: ALARMED};
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
      type: NORMAL_VELOCITY
    },
    face: {
      type: YELLING
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
            type: NORMAL_VELOCITY
          },
          face: {
            type: YELLING
          },
        };
      }
    });
};

export const flipCommand: Command = flipArguments => {
  return extractFlipExpressionParts(flipArguments)
    .then(({face, velocity, flippedItem}) => `(╯${face})╯${velocity}${flippedItem}`);
};
