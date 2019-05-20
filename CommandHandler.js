const {flipWord} = require('./WordFlip');

const getResponse = requestBody => {
  return '(╯°□°)╯︵' + flipWord(requestBody.text.trim().substring(5));
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
