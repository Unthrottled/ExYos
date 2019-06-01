const figlet = require('figlet')
import {Command} from "../Command";

export const phraseCommand: Command = userArguments => {
        return new Promise((resolve, reject) => {
            figlet.text(userArguments,{
                font: 'Ghost',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            }, (error, translatedPhrase) => {
                console.warn('bustin makes me feel good')
                if (error) {
                    console.error(error)
                    reject(error)
                } else {
                    resolve(translatedPhrase)
                }
            })
        });
}
