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

describe('ResponseGenerator', () => {
  describe('generateResponse', () => {
    it('should reject when not given a slack request', () => {
      const headers = {};
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST
        }
      };
      const result = generateResponse(request);
      return expect(result).rejects.toEqual("Not a Slack Request")
    });

    it('should return usage when given', () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          text: 'doabarrelroll'
        }
      };
      const result = generateResponse(request);
      return expect(result).resolves.toEqual({
        "exyosResponse": {
          "attachments": [{"text": "Available Commands: flip, unflip"}],
          "response_type": "ephemeral",
          "text": "Usage: <Command> <Argument>"
        }, "slackUrl": "https://hooks.slack.com/commands/1234/5678"
      })
    });
  });
});
