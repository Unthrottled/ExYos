const {flipCommand, unFlipCommand} = require('./flip/FlipCommands');
const {suddenlyCommand} = require('./suddenly/SuddenlyCommand');
const {signCommand} = require('./sign/SignCommand');
const CommandError = require('./CommandError');
const {isSlackRequest} = require('./Security');

const FLIP = 'flip';
const UNFLIP = 'unflip';
const SUDDENLY = 'suddenly';
const SIGN = 'sign';

const commands = [
  FLIP,
  UNFLIP,
  SUDDENLY,
  SIGN
];

const extractCommand = fullCommand => {
  const firstSpace = fullCommand.indexOf(' ');
  const command = firstSpace > -1 ?  fullCommand.substring(0, firstSpace) : fullCommand;
  const userArguments = firstSpace > -1 ? fullCommand.substring(firstSpace + 1) : '';
  return {
    command,
    userArguments
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
    default:
      return Promise.reject(CommandError());
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
        "text": responseBody,
        "attachments": [
          {
            "text": `Courtesy of <@${(slackRequest.user_id || '').trim()}>`,
          }
        ],
        "response_type": 'in_channel',
      }))
      .catch(({failureResponse, tip}) => ({
        "text": failureResponse,
        "attachments": [
          ...(tip ? [
            {
              "text": tip,
            }
          ] : [
            {
              "text": `Available Commands: ${commands.join(", ")}`,
            }
          ])
        ],
        "response_type": "ephemeral",
      }))
  } else {
    return Promise.resolve({
      "text": `Usage: <Command> <Arguments>`,
      "attachments": [
        {
          "text": `Available Commands: ${commands.join(", ")}`,
        }
      ],
      "response_type": "ephemeral",
    });
  }
};

const getResponseUrl = requestBody => (requestBody.response_url || '').trim();

function generateResponse(request) {
  if (isSlackRequest(request)) {
    const requestBody = request.body;
    return createCommandResponse(requestBody)
      .then((exyosResponse) => ({
        slackUrl: getResponseUrl(requestBody),
        exyosResponse
      }));
  } else {
    return Promise.reject("Not a Slack Request");
  }
}

module.exports = {
  generateResponse
};
