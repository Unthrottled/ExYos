const figlet = require('figlet');
import {Command} from "../Command";
import CommandError from "../CommandError";
import fonts from "./Fonts";

const fontDictionary = fonts.reduce((dictionary, font)=>{
    dictionary[font] = font;
    return dictionary;
},{});

type FontArguments = {
    font?: string,
    phrase: string,
}

function buildBadFont(font: string) {
    throw new CommandError(`Unknown Font: "${font}"`, `Available Fonts (Case-Sensitive): ${getAvailableFonts()}`);
}

const validateFont = (font: string): string =>{
    // @ts-ignore
    if(!fontDictionary[font]){
        buildBadFont(font);
    } else {
        return font;
    }
};

const fontPrefix = '-font="';

function getAvailableFonts() {
    return fonts.join(', ');
}

const constructFontArguments = (userArguments: string): Promise<FontArguments> => {
    const parsedArguments = userArguments.split(' ');
    const {phrase, buildingFont, font} = parsedArguments.reduce((accum, part) => {
        if (part === '-help') {
            throw new CommandError(`Phrase Usage`,
                `/exyos phrase Phrase Here
/exyos phrase -font="Def Leppard" Phrase Here
Available Fonts (Case-Sensitive): ${getAvailableFonts()}`);
        } else if (part.startsWith(fontPrefix) && part.endsWith('"')) {
            accum.font = validateFont(part.substr(fontPrefix.length, part.length - 1));
        } else if (part.startsWith(fontPrefix) && !part.endsWith('"')) {
            accum.buildingFont = part.substr(fontPrefix.length);
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
    });

    if (!!buildingFont && !font) {
        buildBadFont(buildingFont);
    }

    return Promise.resolve({
        phrase: phrase.trim(),
        font
    });
};
const extractFontArguments = (userArguments: string): Promise<FontArguments> => {
    try {
        return constructFontArguments(userArguments);
    } catch (e) {
        return Promise.reject(e);
    }
};

const extractArguments = (userArguments: string): Promise<FontArguments> => {
    if (userArguments.indexOf('-') > -1) {
        return extractFontArguments(userArguments);
    } else {
        return Promise.resolve({
            phrase: userArguments
        });
    }
};

export const phraseCommand: Command = userArguments => {
    return extractArguments(userArguments).then(({font, phrase}) =>
        new Promise((resolve, reject) => {
            figlet.text(phrase, {
                ...(font ? {font} : {}),
                horizontalLayout: 'default',
                verticalLayout: 'default'
            }, (error, translatedPhrase) => {
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    resolve(translatedPhrase);
                }
            });
        }))
        .then(phrase => `\`\`\`${phrase}\`\`\``);
};
