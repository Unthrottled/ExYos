const {flipWord} = require('./flip/WordFlip');

const extractFlipExpressionParts = command => {
  const face = '°□°';
  const velocity = '︵' || '彡';
  const flippedItem = flipWord(command.substring(5)) || '┻━┻';
  return {
    face,
    velocity,
    flippedItem
  }
};

const getResponse = requestBody => {
  let command = requestBody.text.trim();
  const {face, velocity, flippedItem } = extractFlipExpressionParts(command);
  return `(╯${face})╯${velocity}${flippedItem}`;
};

const isGoodRequest = request => {
  const requestBody = request.body;
  return requestBody && requestBody.text &&
    requestBody.text.startsWith("flip")
};

const handler = (request, response) => {
  response.append('Access-Control-Allow-Origin', '*');
  if (isGoodRequest(request)) {
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
