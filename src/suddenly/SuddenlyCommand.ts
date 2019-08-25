import {Command} from '../Command';
import CommandError from "../CommandError";
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
  U_CANT_BE_SRS
} from "../Faces";
import {suddenlyPieces} from './Suddenly';

const defaultPhrase = '';

const renderSuddenly = (rawSuddenlyArguments: string): Promise<string> => {
  return parseSuddenlyArguments(rawSuddenlyArguments)
    .then(suddenlyArguments => {
      const face = suddenlyArguments.face.type;
      const constructedFace = buildFace(face);
      return suddenlyPieces
        .map(piece => piece.replace(`%face%`, constructedFace))
        .map((piece, index) => `${piece} ${(suddenlyArguments.phrase.charAt(index) || '').toUpperCase()}`.trimRight())
        .join('\n');
    });
};

const SPECIAL_FACES = [
  PRETTY,
  COOL,
  SMILE,
];

const buildFace = (face: string): string => {
  const actualFace = getFace(face);
  if (!SPECIAL_FACES.reduce((accum, specialFace) => accum || specialFace === face, false)) {
    return `　${actualFace}`;
  } else {
    return actualFace;
  }
};

interface FaceType {
  type: string
}

interface SuddenlyArguments {
  face: FaceType,
  phrase: string,
}

const AVAILABLE_COMMANDS = [
  '-rage',
  '-alarmed',
  '-solemn',
  '-lenny',
  '-anguish',
  '-smile',
  '-look',
  '-happy',
  '-deadpan',
  '-pretty',
  '-cool',
  '-puppy',
  '-strained',
  '-help',
];

const getAvailableArgumentsString = () =>
  `Available Arguments: ${AVAILABLE_COMMANDS.join(', ').trim()}`;

const actuallyParseArguments = (flipArgumentToParse: string): Promise<SuddenlyArguments> => {
  const parsedArguments = flipArgumentToParse.split(' ');
  const argumentProjection = parsedArguments.reduce((builtArguments, currentString) => {
    if (currentString === '-rage') {
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
    } else if (currentString === '-help') {
      throw new CommandError(`Flip Usage`, getAvailableArgumentsString());
    } else if (currentString.startsWith('-')) {
      throw new CommandError(`Unknown Argument: ${currentString}`, getAvailableArgumentsString());
    } else {
      builtArguments.phrase += `${currentString} `;
    }
    return builtArguments;
  }, {
    phrase: '',
    face: {
      type: U_CANT_BE_SRS,
    },
  });
  return Promise.resolve(argumentProjection)
    .then(suddenlyArguments => {
      suddenlyArguments.phrase = suddenlyArguments.phrase.toUpperCase();
      return suddenlyArguments;
    });
};

const parseSuddenlyArguments = (suddenlyArguments: string): Promise<SuddenlyArguments> => {
  return Promise.resolve(suddenlyArguments)
    .then(flipArgument => {
      if (flipArgument.indexOf('-') > -1) {
        return actuallyParseArguments(flipArgument);
      } else {
        return {
          phrase: suddenlyArguments,
          face: {
            type: U_CANT_BE_SRS,
          },
        };
      }
    });
};

export const suddenlyCommand: Command = userArguments => {
  const phrase = userArguments || defaultPhrase;
  return renderSuddenly(phrase);
};
