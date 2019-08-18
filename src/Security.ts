const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', process.env.SLACK_KEY || 'potato');

function createHash(request: any) {
  const timeStamp = request && request.header && request.header['X-Slack-Request-Timestamp'];
  if (Math.abs(timeStamp - (new Date().getTime() /1000)) > 300) {
    return false; // replay attack
  }
  if(request && request.body) {
    const body = Object.keys(request.body)
      .map(key => `${key}=${request.body[key]}`)
      .join("&");
    const signatureBase = `v0:${timeStamp}:${body}`;
    return hmac.update(signatureBase).digest('hex')
  }
  return false;
}

export const isSlackRequest = request => {
  const slackSecurity = request && request.header &&
    request.header('X-Slack-Signature');
  return isDev() || (!!slackSecurity &&slackSecurity === createHash(request));
};


const isDev = () => process.env.DEV;