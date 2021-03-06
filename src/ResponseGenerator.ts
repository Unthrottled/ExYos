import CommandError from './CommandError';
import {flipCommand} from './flip/FlipCommand';
import {unFlipCommand} from './flip/UnflipCommand';
import {messageGenerator} from "./message/MessageGenerator";
import {phraseCommand} from './phrase/PhraseCommand';
import {signCommand} from './sign/SignCommand';
import {suddenlyCommand} from './suddenly/SuddenlyCommand';

const {isSlackRequest} = require('./Security');

const FLIP = 'flip';
const UNFLIP = 'unflip';
const SUDDENLY = 'suddenly';
const SIGN = 'sign';
const PHRASE = 'phrase';

const commands = [
  FLIP,
  UNFLIP,
  SUDDENLY,
  SIGN,
  PHRASE,
];

const extractCommand = fullCommand => {
  const firstSpace = fullCommand.indexOf(' ');
  const command = firstSpace > -1 ?  fullCommand.substring(0, firstSpace) : fullCommand;
  const userArguments = firstSpace > -1 ? fullCommand.substring(firstSpace + 1) : '';
  return {
    command,
    userArguments,
  };
};

// todo: Command type () (arguments: string)=>Promise<String>
const getResponse = requestBody => {
  const fullCommand = requestBody.text.trim();
  const {command, userArguments} = extractCommand(fullCommand);
  switch (command) {
    case FLIP:
      return flipCommand(userArguments);
    case UNFLIP:
      return unFlipCommand(userArguments);
    case SUDDENLY:
      return suddenlyCommand(userArguments);
    case SIGN:
      return signCommand(userArguments);
    case PHRASE:
      return phraseCommand(userArguments);
    default:
      return Promise.reject(new CommandError());
  }
};

const isGoodRequest = requestBody => {
  return requestBody && requestBody.text &&
    commands.findIndex(command => requestBody.text.startsWith(`${command}`)) > -1;
};

const createCommandResponse = slackRequest => {
  if (isGoodRequest(slackRequest)) {
    return getResponse(slackRequest)
      .then(responseBody => ({
        text: responseBody,
        attachments: [
          {
            text: messageGenerator(`<@${(slackRequest.user_id || '').trim()}>`),
          },
        ],
        response_type: 'in_channel',
      }))
      .catch((error) => {
        if (!(error instanceof CommandError)) {
          console.error(error);
        }
        const {failureResponse, tip} = error;
        return ({
          text: failureResponse,
          attachments: [
            ...(tip ? [
              {
                text: tip,
              },
            ] : [
              {
                text: `Available Commands: ${commands.join(', ')}`,
              },
            ]),
          ],
          response_type: 'ephemeral',
        });
      });
  } else {
    return Promise.resolve({
      text: `Usage: <Command> <Arguments>`,
      attachments: [
        {
          text: `Available Commands: ${commands.join(', ')}`,
        },
      ],
      response_type: 'ephemeral',
    });
  }
};

const getResponseUrl = requestBody => (requestBody.response_url || '').trim();

export function generateResponse(request) {
  if (isSlackRequest(request)) {
    const requestBody = request.body;
    return createCommandResponse(requestBody)
      .then((exyosResponse) => ({
        slackUrl: getResponseUrl(requestBody),
        exyosResponse,
      }));
  } else {
    return Promise.reject('Not a Slack Request');
  }
}
