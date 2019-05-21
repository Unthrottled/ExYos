const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');

const application = express();
const teapot = require('./Teapot').default;

application.use(bodyParser.json({strict: false}));
application.use(bodyParser.urlencoded({extended: true}));

const commandHandler = require('./CommandHandler');
application.post('/', commandHandler);

application.use((request, response)=>{
  response.status(418).send(teapot)
});

module.exports.handler = serverless(application);
