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
  'text': 'unflip Thanks Obama',
  'response_url': 'https://hooks.slack.com/commands/1234/5678',
  'trigger_id': '13345224609.738474920.8088930838d88f008e0',
};

describe('Flip Command', () => {
  describe('Tables', () => {
    it('should return flipped table when given table argument', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -table'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(º _ ºノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return flipped table when given no arguments and phrase', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip '
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(º _ ºノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return unflipped table when given just a face argument: solemn', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -solemn'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(º _ ºノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });


    it('should return unflipped table when given just a face argument: anguish', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -anguish'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(ಥ_ಥノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });



    it('should return unflipped table when given just a face argument: lenny', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -lenny'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(͡° ͜ʖ ͡°ノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return unflipped table when given just a face argument: smile', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -smile'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(◕ ◡ ◕ノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return unflipped table when given just a face argument: happy', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -happy'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(ᐖノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return unflipped table when given just a face argument: cool', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -cool'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(■_■-ノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return unflipped table when given just a face argument: puppy', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -puppy'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(•ᴥ•ノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return unflipped table when given just a face argument: pretty', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -pretty'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(◕‿◕✿ノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return unflipped table when given just a face argument: deadpan', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -deadpan'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(●_●ノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return unflipped table when given just a face argument: look', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -look'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(ಠ_ಠノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return unflipped table when given just a face argument: strained', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -strained'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(⇀‸↼‶ノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return unflipped table when given just a face argument: lenny and anguish', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -lenny -anguish'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(ಥ_ಥノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });


    it('should return alarmed flipped table when given alarmed and no phrase', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -alarmed'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(◉Д◉ノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return rage flipped table when given alarmed, rage, and no phrase', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -alarmed -rage'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(ಠ益ಠノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return rage flipped table when given alarmed, rage, table, and no phrase', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'unflip -alarmed -rage -table'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┳━┳ノ(ಠ益ಠノ)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });
  });
});
