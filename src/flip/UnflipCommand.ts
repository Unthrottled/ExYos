import {Command} from '../Command';
import CommandError from '../CommandError';
import {ALARMED, getFace, RAGE, SOLEMN} from '../Faces';
import {PERSON, PHRASE, TABLE} from './FlipableItems';

const AVAILABLE_COMMANDS = ['-table', '-rage', '-alarmed', '-help'];

function getAvailableArgumentsString() {
  return `Available Arguments: ${AVAILABLE_COMMANDS.join(', ').trim()}`;
}

const actuallyParseUnFlipArguments = unflipArgumentToParse => {
  const parsedArguments = unflipArgumentToParse.split(' ');
  const argumentProjection = parsedArguments.reduce((builtArguments, currentString) => {
    if (currentString === '-table') {
      builtArguments.flippedItem = {type: TABLE};
    } else if (currentString === '-rage') {
      builtArguments.face = {type: RAGE};
    } else if (currentString === '-alarmed') {
      builtArguments.face = {type: ALARMED};
    } else if (currentString === '-help') {
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
    face: {
      type: SOLEMN,
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
      const face = getFace(parsedArguments.face.type);
      const unFlippedItem = getUnFlippedItem(parsedArguments.flippedItem);
      return {
        face,
        unFlippedItem,
      };
    });
};

export const unFlipCommand: Command = flipArguments => {
  return extractUnFlipExpressionParts(flipArguments)
    .then(({face, unFlippedItem}) => `${unFlippedItem}ノ(${face}ノ)`);
};
