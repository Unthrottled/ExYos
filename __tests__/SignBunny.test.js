const {generateResponse} = require('../src/ResponseGenerator');

const BASE_REQUEST = {
  'token': 'gIkuvaNzQIHg97ATvDxqgjtO',
  'team_id': 'T0001',
  'team_domain': 'example',
  'enterprise_id': 'E0001',
  'enterprise_name': 'Globular%20Construct%20Inc',
  'channel_id': 'C2147483705',
  'channel_name': 'test',
  'user_id': 'U2147483697',
  'user_name': 'Steve',
  'command': '/weather',
  'text': 'flip Thanks Obama',
  'response_url': 'https://hooks.slack.com/commands/1234/5678',
  'trigger_id': '13345224609.738474920.8088930838d88f008e0',
};

describe('Sign Bunny', () => {
  it('should return sign bunny when given default sign', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'sign'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
`(\\__/) ||
,(•ㅅ•) ||
,/ 　 づ
`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
});
