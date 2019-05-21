const {flipWord} = require('./flip/WordFlip');

const extractFlipExpressionParts = flipArguments => {
  const face = '°□°' || 'ಠ_ಠ' || 'ಠ益ಠ' || '◉Д◉';
  const velocity = '︵' || '彡';
  const flippedItem = flipWord(flipArguments) || '┻━┻' || '/(.□ . \\)';
  return {
    face,
    velocity,
    flippedItem
  }
};
const extractUnFlipExpressionParts = flipArguments => {
  const face = 'º _ º' || '°□°' || 'ಠ_ಠ' || 'ಠ益ಠ' || '◉Д◉';
  const unFlippedItem = flipArguments || '┻━┻' || '/(.□ . \\)';
  return {
    face,
    unFlippedItem
  }
};

const FLIP = 'flip';
const UNFLIP = 'unflip';
const ZALGO = 'zalgo';

const flipCommand = flipArguments => {
  const {face, velocity, flippedItem} = extractFlipExpressionParts(flipArguments);
  return `(╯${face})╯${velocity}${flippedItem}`
};

const unFlipCommand = flipArguments => {
  const {face, unFlippedItem} = extractUnFlipExpressionParts(flipArguments);
  return `${unFlippedItem}ノ(${face}ノ)`
};

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
    case ZALGO:
    default:
      return '¯\\_(ツ)_/¯'
  }
};

const commands = [
  FLIP,
  UNFLIP,
  ZALGO,
];

const isGoodRequest = requestBody => {
  return requestBody && requestBody.text &&
    commands.findIndex(command => requestBody.text.startsWith(`${command} `)) > -1;
};

const createCommandResponse = slackRequest => {
  if (isGoodRequest(slackRequest)) { // todo: handle correct command, bad arguments
    return {
      "text": getResponse(slackRequest),
      "response_type": "in_channel",
    };
  } else {
    return {
      "text": `Usage: <Command> <Argument>`,
      "attachments": [
        {
          "text": "Available Commands",
        }
      ],
      "response_type": "ephemeral",
    };
  }
};

const isSlackRequest = request =>
  request && request.header &&
  request.header('X-Slack-Request-Timestamp');//todo: validate request

const getResponseUrl = requestBody => (requestBody.response_url || '').trim();

function generateResponse(request) {
  if (isSlackRequest(request)) {
    const requestBody = request.body;
    return Promise.resolve({
      slackUrl: getResponseUrl(requestBody),
      exyosResponse: createCommandResponse(requestBody),
    });
  } else {
    return Promise.reject("Not a Slack Request");
  }
}

const axios = require('axios');

const sendDelayedResponse = (slackUrl, exyosResponse) => {
  console.log(slackUrl, exyosResponse);
  return axios.post(slackUrl, exyosResponse, {
    headers: {'content-type': 'application/json'},
  }).catch(error => {
    console.error('Unable to send response to Slack for raisins', error);
  });
};

const processRequest = request => {
  return generateResponse(request)
    .then(({slackUrl, exyosResponse}) => sendDelayedResponse(slackUrl, exyosResponse))
    .catch(() => {
    });
};

const handler = (request, response) => {
  processRequest(request);
  response.status(200).end();
};

module.exports = handler;
