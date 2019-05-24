const {flipCommand, unFlipCommand} = require('./flip/FlipCommands');
const {isSlackRequest} = require('./Security');

const FLIP = 'flip';
const UNFLIP = 'unflip';
// const ZALGO = 'zalgo';

const commands = [
  FLIP,
  UNFLIP,
  // ZALGO,
];

const extractCommand = fullCommand => {
  const firstSpace = fullCommand.indexOf(' ');
  const command = fullCommand.substring(0, firstSpace);
  const userArguments = fullCommand.substring(firstSpace + 1);
  return {
    command,
    userArguments
  };
};

const getResponse = requestBody => {
  const fullCommand = requestBody.text.trim();
  const {command, userArguments} = extractCommand(fullCommand);
  switch (command) {
    case FLIP:
      return flipCommand(userArguments);
    case UNFLIP:
      return unFlipCommand(userArguments);
    // case ZALGO:
    default:
      return '¯\\_(ツ)_/¯'
  }
};

const isGoodRequest = requestBody => {
  return requestBody && requestBody.text &&
    commands.findIndex(command => requestBody.text.startsWith(`${command} `)) > -1;
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
      "text": `Usage: <Command> <Argument>`,
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
