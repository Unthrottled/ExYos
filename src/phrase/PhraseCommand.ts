import Bouncer from "./Bouncer";
const figlet = require('figlet/lib/node-figlet.js');
import {Command} from '../Command';
import CommandError from '../CommandError';
import fonts from './Fonts';

const fontDictionary = fonts.reduce((dictionary, font) => {
  dictionary[font.toLocaleLowerCase()] = font;
  return dictionary;
}, {});

interface FontArguments {
  font?: string;
  phrase: string;
  art?: string;
}

function buildBadFont(font: string) {
  throw new CommandError(`Unknown Font: "${font}"`, `Available Fonts: ${getAvailableFonts()}`);
}

const validateFont = (font: string): string => {
  const insensitiveFont = font.toLocaleLowerCase();
  // @ts-ignore
  const fontDictionaryElement = fontDictionary[insensitiveFont];
  if (!fontDictionaryElement) {
    buildBadFont(font);
  } else {
    return fontDictionaryElement;
  }
};

const fontPrefix = '-font="';
const otherFontPrefix = '-f="';

function getAvailableFonts() {
  return fonts.join(', ');
}

const isFontCommand = part => part.startsWith(fontPrefix) || part.startsWith(otherFontPrefix);

const NONE = '';
const BOUNCER = 'bouncer';

const constructPhraseArguments = (userArguments: string): Promise<FontArguments> => {
  const parsedArguments = userArguments.split(' ');
  const {phrase, buildingFont, font, art} = parsedArguments.reduce((accum, part) => {
    if (part === '-help') {
      throw new CommandError(`Phrase Usage`,
          `\`/exyos phrase Phrase Here\`
\`/exyos phrase -font="Def Leppard" Phrase Here\`
\`/exyos phrase -f="Def Leppard" Phrase Here\`
Available Fonts: ${getAvailableFonts()}`);
    } else if (isFontCommand(part) && part.endsWith('"')) {
      accum.font = validateFont(part.substring(part.indexOf('="') + 2, part.length - 1));
    } else if (isFontCommand(part) && !part.endsWith('"')) {
      accum.buildingFont = part.substring(part.indexOf('="') + 2);
    } else if (part === '-bouncer') {
      accum.art = BOUNCER;
    } else if (part.startsWith('-')) {
      // todo: bad command.
    } else if (accum.buildingFont) {
      if (part.endsWith('"')) {
        const builtFont = `${accum.buildingFont} ${part.substr(0, part.length - 1)}`;
        accum.font = validateFont(builtFont);
        accum.buildingFont = '';
      } else {
        accum.buildingFont += ' ' + part;
      }
    } else {
      accum.phrase += ' ' + part;
    }
    return accum;
  }, {
    phrase: '',
    buildingFont: '',
    font: '',
    art: NONE,
  });

  if (!!buildingFont && !font) {
    buildBadFont(buildingFont);
  }

  return Promise.resolve({
    phrase: phrase.trim(),
    font,
    art,
  });
};
const extractPhraseArguments = (userArguments: string): Promise<FontArguments> => {
  try {
    return constructPhraseArguments(userArguments);
  } catch (e) {
    return Promise.reject(e);
  }
};

const extractArguments = (userArguments: string): Promise<FontArguments> => {
  if (userArguments.indexOf('-') > -1) {
    return extractPhraseArguments(userArguments);
  } else {
    return Promise.resolve({
      phrase: userArguments,
    });
  }
};

// (╯°□°)╯︵sǝʇonb ʇɹɐɯS SOɔɐW
const sanitizeArguments = (dirtyUserArguments: string): string => {
  return dirtyUserArguments.replace(/”/, '"')
      .replace(/“/, '"');
};

const getArt = (artType: string): string => {
  switch (artType) {
    case BOUNCER:
      return `${Bouncer}\n`;
    case NONE:
    default:
      return '';
  }
};

export const phraseCommand: Command = userArguments => {
  return extractArguments(sanitizeArguments(userArguments)).then(({font, phrase, art}) =>
      new Promise((resolve, reject) => {
        if(phrase){
          figlet.text(phrase, {
            ...(font ? {font} : {}),
            horizontalLayout: 'default',
            verticalLayout: 'default',
          }, (error, translatedPhrase) => {
            if (error) {
              console.error(error);
              reject(error);
            } else {
              resolve(translatedPhrase);
            }
          });
        } else {
          resolve('');
        }
      }).then(phrase => `${getArt(art)}${phrase}`))
      .then(phrase => `\`\`\`${phrase}\`\`\``);
};
