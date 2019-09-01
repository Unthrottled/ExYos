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
          'text': 'flip -table'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯°□°)╯︵┻━┻');
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
          'text': 'flip '
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯°□°)╯︵┻━┻');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });


    it('should return flipped table when given just a face argument: solemn', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -solemn'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯º _ º)╯︵┻━┻');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });


    it('should return flipped table when given just a face argument: anguish', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -anguish'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯ಥ_ಥ)╯︵┻━┻');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });



    it('should return flipped table when given just a face argument: lenny', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -lenny'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯͡° ͜ʖ ͡°)╯︵┻━┻');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return flipped table when given just a face argument: smile', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -smile'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯◕ ◡ ◕)╯︵┻━┻');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return flipped table when given just a face argument: happy', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -happy'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯ᐛ)╯︵┻━┻');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return flipped table when given just a face argument: cool', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -cool'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯-■_■)╯︵┻━┻');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return flipped table when given just a face argument: puppy', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -puppy'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯•ᴥ•)╯︵┻━┻');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return flipped table when given just a face argument: pretty', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -pretty'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯✿◕‿◕)╯︵┻━┻');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return flipped table when given just a face argument: deadpan', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -deadpan'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯●_●)╯︵┻━┻');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return flipped table when given just a face argument: look', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -look'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯ಠ_ಠ)╯︵┻━┻');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return flipped table when given just a face argument: strained', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -strained'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯‶⇀‸↼)╯彡┻━┻');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return flipped table when given just a face argument: lenny and anguish', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -lenny -anguish'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯ಥ_ಥ)╯︵┻━┻');
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
          'text': 'flip -alarmed'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯◉Д◉)╯彡┻━┻');
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
          'text': 'flip -alarmed -rage'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯ಠ益ಠ)╯彡┻━┻');
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
          'text': 'flip -alarmed -rage -table'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('(╯ಠ益ಠ)╯彡┻━┻');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return left flipped table when given just a face argument: puppy', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -puppy -left'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┻━┻︵└(•ᴥ•└)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return left flipped table when given just a face argument: cool', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -cool -left'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┻━┻︵└(■_■-└)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return left flipped table when given just a face argument: pretty', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -pretty -left'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┻━┻︵└(◕‿◕✿└)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });
    it('should return left flipped table when given just a face argument: happy', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -happy -left'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┻━┻︵└(ᐖ└)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });
    it('should return left flipped table when given just a face argument: happy', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -happy -force -left'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual("┻━┻ミ└(ᐖ└)");
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });
    it('should return force flipped table when given just a face argument: happy', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -happy -force'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual("(╯ᐛ)╯彡┻━┻");
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return left flipped table when given just a face argument: strained', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -strained -left'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┻━┻ミ└(⇀‸↼‶└)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });

    it('should return left flipped table when given just a face argument(permute): puppy', async () => {
      const headers = {
        'X-Slack-Request-Timestamp': 'aoeu'
      };
      const request = {
        header: header => headers[header],
        body: {
          ...BASE_REQUEST,
          'text': 'flip -left -puppy'
        }
      };
      const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
      expect(attachments[0].text).toContain('<@U2147483697>');
      expect(response_type).toEqual("in_channel");
      expect(text).toEqual('┻━┻︵└(•ᴥ•└)');
      expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
    });
  });
});
