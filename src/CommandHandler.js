const axios = require('axios');
const { generateResponse } = require('./ResponseGenerator');

const sendDelayedResponse = (slackUrl, exyosResponse) =>
  axios.post(slackUrl, exyosResponse, {
    headers: {'content-type': 'application/json'},
  }).catch(error => {
    console.error('Unable to send response to Slack for raisins', error);
  });

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
