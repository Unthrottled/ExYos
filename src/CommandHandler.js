const {flipWord} = require('./flip/WordFlip');

const extractFlipExpressionParts = flipArguments => {
  const face = '°□°'|| 'ಠ_ಠ' || 'ಠ益ಠ' || '◉Д◉';
  const velocity = '︵' || '彡';
  const flippedItem = flipWord(flipArguments) || '┻━┻' || '/(.□ . \\)';
  return {
    face,
    velocity,
    flippedItem
  }
};
const extractUnFlipExpressionParts = flipArguments => {
  const face = 'º _ º'||'°□°'|| 'ಠ_ಠ' || 'ಠ益ಠ' || '◉Д◉';
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

const extractCommand = fullCommand=> {
  const firstSpace = fullCommand.indexOf(' ');
  const command = fullCommand.substring(0, firstSpace);
  const arguments = fullCommand.substring(firstSpace+1);
  return {
    command,
    arguments
  };
};

const getResponse = requestBody => {
  const fullCommand = requestBody.text.trim();
  const {command, arguments } = extractCommand(fullCommand);
  switch (command) {
    case FLIP: return flipCommand(arguments);
    case UNFLIP: return unFlipCommand(arguments);
    case ZALGO:
    default: return '¯\\_(ツ)_/¯'
  }
};

const commands = [
  FLIP,
  UNFLIP,
  ZALGO,
];

const isGoodRequest = request => {
  const requestBody = request.body;
  return requestBody && requestBody.text &&
    commands.findIndex(command => requestBody.text.startsWith(`${command} `)) > -1;
};

const handler = (request, response) => {
  response.append('Access-Control-Allow-Origin', '*');
  if (isGoodRequest(request)) { // todo: handle correct command, bad arguments
    response.json({
      "text": getResponse(request.body),
      "response_type": "in_channel",
    });
  } else {
    response.json({
      "text": `Usage: <Command> <Argument>`,
      "attachments": [
        {
          "text": "Available Commands",
        }
      ],
      "response_type": "ephemeral",
    });
  }
};

module.exports.default = handler;
