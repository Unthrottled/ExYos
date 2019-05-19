const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');

const application = express();
const upsideDownDictionary = require('./dictionary');

const flipWord = (workToFlip) => {
  let characters = workToFlip.split("");
  return characters.map(character => upsideDownDictionary[character] || upsideDownDictionary[character.toLocaleLowerCase()])
    .reduce((message, character)=> character + message, '');
};

application.use(bodyParser.json({strict: false}));
application.use(bodyParser.urlencoded({extended: true}));

application.post('/', (request, response)=>{
  console.log(JSON.stringify(request.body));
  response.send("Go away\n");
});


application.listen(8000, ()=>console.log("listening on 8000"));

module.exports.handler = serverless(application);
