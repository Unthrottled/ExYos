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

describe('Suddenly', () => {
  it('should return suddenly character when given default suddenly', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
`⊂_ヽ
　 ＼＼ ＿
  　　 ＼(　●_●)
　　　 <　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly fabulous character when given default suddenly', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly fabulous'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
`⊂_ヽ
　 ＼＼ ＿
  　　 ＼(　●_●) F
　　　 <　⌒ヽ A
　　　/ 　 へ＼ B
　　 /　　/　＼＼ U
　　 ﾚ　ノ　　 ヽ_つ L
　　/　/ O
　 /　/| U
　(　(ヽ S
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly help when asked for', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly fabulous -help'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('Available Arguments: -alarmed, -anguish, -cool, -deadpan, -happy, -help, -lenny, -look, -pretty, -puppy, -rage, -smile, -solemn, -strained, -yell');
    expect(response_type).toEqual("ephemeral");
    expect(text).toEqual(
`Suddenly Usage`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly unknown', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly fabulous -ludicrous'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('Available Arguments: -alarmed, -anguish, -cool, -deadpan, -happy, -help, -lenny, -look, -pretty, -puppy, -rage, -smile, -solemn, -strained, -yell');
    expect(response_type).toEqual("ephemeral");
    expect(text).toEqual(
`Unknown Argument: -ludicrous`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly fabulous character when given cool', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly -cool deal w/ it'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
`⊂_ヽ
　 ＼＼ ＿
  　　 ＼( -■_■) D
　　　 <　⌒ヽ E
　　　/ 　 へ＼ A
　　 /　　/　＼＼ L
　　 ﾚ　ノ　　 ヽ_つ
　　/　/ W
　 /　/| /
　(　(ヽ
　|　|、＼ I
　| 丿 ＼ ⌒) T
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly fabulous character when given pretty', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly -pretty'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
`⊂_ヽ
　 ＼＼ ＿
  　　 ＼( ✿◕‿◕)
　　　 <　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly fabulous character when given cool (permute)', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly deal w/ it -cool'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
`⊂_ヽ
　 ＼＼ ＿
  　　 ＼( -■_■) D
　　　 <　⌒ヽ E
　　　/ 　 へ＼ A
　　 /　　/　＼＼ L
　　 ﾚ　ノ　　 ヽ_つ
　　/　/ W
　 /　/| /
　(　(ヽ
　|　|、＼ I
　| 丿 ＼ ⌒) T
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });

  it('should return suddenly fabulous character when given alarmed', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly -alarmed'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `⊂_ヽ
　 ＼＼ ＿
  　　 ＼(　◉Д◉)
　　　 <　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly fabulous character when given rage', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly -rage'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `⊂_ヽ
　 ＼＼ ＿
  　　 ＼(　ಠ益ಠ)
　　　 <　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly fabulous character when given yell', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly -yell'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `⊂_ヽ
　 ＼＼ ＿
  　　 ＼(　°□°)
　　　 <　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly fabulous character when given puppy', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly -puppy'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `⊂_ヽ
　 ＼＼ ＿
  　　 ＼(　•ᴥ•)
　　　 <　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly fabulous character when given strained', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly -strained'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `⊂_ヽ
　 ＼＼ ＿
  　　 ＼( ‶⇀‸↼)
　　　 <　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly fabulous character when given happy', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly -happy'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `⊂_ヽ
　 ＼＼ ＿
  　　 ＼(　ᐛ)
　　　 <　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly fabulous character when given smile', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly -smile'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `⊂_ヽ
　 ＼＼ ＿
  　　 ＼( ◕ ◡ ◕)
　　　 <　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly fabulous character when given anguish', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly -anguish'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `⊂_ヽ
　 ＼＼ ＿
  　　 ＼(　ಥ_ಥ)
　　　 <　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly fabulous character when given solumn', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly -solemn'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `⊂_ヽ
　 ＼＼ ＿
  　　 ＼(　º _ º)
　　　 <　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly fabulous character when given lenny', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly -lenny'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `⊂_ヽ
　 ＼＼ ＿
  　　 ＼(　͡° ͜ʖ ͡°)
　　　 <　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly fabulous character when given deadpan', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly -deadpan'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `⊂_ヽ
　 ＼＼ ＿
  　　 ＼(　●_●)
　　　 <　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return suddenly fabulous character when given look', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'suddenly -look'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `⊂_ヽ
　 ＼＼ ＿
  　　 ＼(　ಠ_ಠ)
　　　 <　⌒ヽ
　　　/ 　 へ＼
　　 /　　/　＼＼
　　 ﾚ　ノ　　 ヽ_つ
　　/　/
　 /　/|
　(　(ヽ
　|　|、＼
　| 丿 ＼ ⌒)
　| |　　) /
\`ノ )　 Lﾉ`);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });


});
