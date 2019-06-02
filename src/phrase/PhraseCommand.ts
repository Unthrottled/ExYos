const figlet = require('figlet');
import {Command} from "../Command";

type FontArguments = {
    font?: string,
    phrase: string,
}

const fontPrefix = '-font="';
const extractFontArguments = (userArguments: string): Promise<FontArguments> =>{
    const parsedArguments = userArguments.split(' ');
    const {phrase, buildingFont, font} = parsedArguments.reduce((accum, part)=>{
        if(part.startsWith(fontPrefix)){
            accum.buildingFont = part.substr(fontPrefix.length)
        } else if(accum.buildingFont){
            if(part.endsWith('"')){
                accum.font = `${accum.buildingFont} ${part.substr(0, part.length - 1)}`;
                accum.buildingFont = '';
            } else {
                accum.buildingFont += ' ' + part;
            }
        } else {
            accum.phrase += ' ' + part
        }
        return accum;
    }, {
        phrase: '',
        buildingFont: '',
        font:'',
    });

    if(!!buildingFont && !font){
        //bad font
    }

    return Promise.resolve({
        phrase: phrase.trim(),
        font
    })
};

const extractArguments = (userArguments: string): Promise<FontArguments> => {
    if(userArguments.indexOf('-') > -1){
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
