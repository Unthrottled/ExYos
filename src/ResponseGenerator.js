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
  const arguments = fullCommand.substring(firstSpace + 1);
  return {
    command,
    arguments
  };
};

const getResponse = requestBody => {
  const fullCommand = requestBody.text.trim();
  const {command, arguments} = extractCommand(fullCommand);
  switch (command) {
    case FLIP:
      return flipCommand(arguments);
    case UNFLIP:
      return unFlipCommand(arguments);
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
          {
            "text": tip,
          }
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
