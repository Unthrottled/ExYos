const axios = require('axios');
const { generateResponse } = require('./ResponseGenerator');

const sendDelayedResponse = (slackUrl, exyosResponse) =>
  axios.post(slackUrl, exyosResponse, {
    headers: {'Content-type': 'application/json'},
    timeout: 1000,
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
  processRequest(request).then(()=>{
    //TIL that Serverless only run when they are serving a request
    //So I have to post to the call back before ending the response. λ
    response.status(200).end();
  });
};

module.exports = handler;
