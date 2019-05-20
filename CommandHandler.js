const upsideDownDictionary = require('./dictionary');

const flipWord = (workToFlip) => {
  let characters = workToFlip.split("");
  return characters.map(character => upsideDownDictionary[character] || upsideDownDictionary[character.toLocaleLowerCase()] || character)
    .reduce((message, character)=> character + message, '');
};


const getResponse = requestBody => {
  return '(╯°□°)╯︵' + flipWord(requestBody.text.trim().substring(5));
};

const isGoodRequest = request => {
  const requestBody = request.body;
  return requestBody && requestBody.text &&
    requestBody.text.startsWith("flip")
};

const handler = (request, response)=>{
  response.append('Access-Control-Allow-Origin', '*');
  if(isGoodRequest(request)){
    response.json({
      "text": getResponse(request.body),
      "response_type": "in_channel",
    });
  } else {
    response.json({
      "text": `Usage: <Command> <Argument>`,
      "response_type": "in_channel",
    });
  }
};

module .exports.default = handler;
