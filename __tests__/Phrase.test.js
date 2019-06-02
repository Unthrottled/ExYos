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

describe('Phrases', () => {
  it('should return phrase with default text', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase Meme Machine'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `\`\`\`  __  __                       __  __            _     _            
 |  \\/  | ___ _ __ ___   ___  |  \\/  | __ _  ___| |__ (_)_ __   ___ 
 | |\\/| |/ _ \\ '_ \` _ \\ / _ \\ | |\\/| |/ _\` |/ __| '_ \\| | '_ \\ / _ \\
 | |  | |  __/ | | | | |  __/ | |  | | (_| | (__| | | | | | | |  __/
 |_|  |_|\\___|_| |_| |_|\\___| |_|  |_|\\__,_|\\___|_| |_|_|_| |_|\\___|
                                                                    \`\`\``);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return phrase with Def Leppard text', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -font="Def Leppard" Def Leppard'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `\`\`\`  ;                        ,                                                                              ;           
  ED.                      Et                                                                             ED.         
  E#Wi                 ,;  E#t                                ,;                                          E#Wi        
  E###G.             f#i   E##t                      i      f#i t         t                    j.         E###G.      
  E#fD#W;          .E#t    E#W#t                    LE    .E#t  ED.       ED.               .. EW,        E#fD#W;     
  E#t t##L        i#W,     E#tfL.                  L#E   i#W,   E#K:      E#K:             ;W, E##j       E#t t##L    
  E#t  .E#K,     L#D.      E#t                    G#W.  L#D.    E##W;     E##W;           j##, E###D.     E#t  .E#K,  
  E#t    j##f  :K#Wfff; ,ffW#Dffj.               D#K. :K#Wfff;  E#E##t    E#E##t         G###, E#jG#W;    E#t    j##f 
  E#t    :E#K: i##WLLLLt ;LW#ELLLf.             E#K.  i##WLLLLt E#ti##f   E#ti##f      :E####, E#t t##f   E#t    :E#K:
  E#t   t##L    .E#L       E#t                .E#E.    .E#L     E#t ;##D. E#t ;##D.   ;W#DG##, E#t  :K#E: E#t   t##L  
  E#t .D#W;       f#E:     E#t               .K#E        f#E:   E#ELLE##K:E#ELLE##K: j###DW##, E#KDDDD###iE#t .D#W;   
  E#tiW#G.         ,WW;    E#t              .K#D          ,WW;  E#L;;;;;;,E#L;;;;;;,G##i,,G##, E#f,t#Wi,,,E#tiW#G.    
  E#K##i            .D#;   E#t             .W#G            .D#; E#t       E#t     :K#K:   L##, E#t  ;#W:  E#K##i      
  E##D.               tt   E#t            :W##########Wt     tt E#t       E#t    ;##D.    L##, DWi   ,KK: E##D.       
  E#t                      ;#t            :,,,,,,,,,,,,,.                        ,,,      .,,             E#t         
  L:                        :;                                                                            L:          \`\`\``);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
});
