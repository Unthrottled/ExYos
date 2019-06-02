const figlet = require('figlet');
import {Command} from "../Command";

type FontArguments = {
    font?: string,
    phrase: string,
}

const extractArguments = (userArguments: string): Promise<FontArguments> => {
    return Promise.resolve({
        phrase: userArguments
    });
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
