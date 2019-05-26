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
  it('should return sign bunny when given Short Phrase', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'sign I feel like I am taking crazy pills'
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
  it('should return sign bunny when given Short Phrase', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'sign Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis, nisi et accumsan tristique, diam nisi finibus lacus, nec eleifend elit nibh eu ex. Donec ultrices et elit at interdum. Nunc tortor magna, auctor nec pellentesque ac, aliquet eget nisl. Praesent eget metus ut quam laoreet iaculis vel sit amet lectus. Etiam ultricies ex eu neque pellentesque, vel blandit metus convallis. Phasellus turpis elit, ornare a mattis at, pharetra vitae diam. Integer euismod nunc ex, eget consectetur sem fringilla eu. Aenean ac leo quis tellus placerat porta. Integer rhoncus enim est, ut mollis orci malesuada vitae. Ut id arcu rutrum, maximus lacus quis, porttitor tortor. Suspendisse in risus neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
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
