import commandHandler from './CommandHandler';
import teapot from './Teapot';

const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const application = express();

application.use(bodyParser.json({strict: false}));
application.use(bodyParser.urlencoded({extended: true, }));
application.post('/', commandHandler);

application.use((request, response) => {
  response.status(418).send(teapot);
});

module.exports.handler = serverless(application);
