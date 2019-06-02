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
  it('should return phrase with Def Leppard text (smart-quotes)', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -font=“Def Leppard” Def Leppard'
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
  it('should return phrase with Def Leppard text (smart-quotes && case-insensitivity)', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -font=“def leppard” Def Leppard'
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

  it('should return phrase with Def Leppard text (short-hand)', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -f="Def Leppard" Def Leppard'
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
  it('should return phrase with Def Leppard text (short-hand && smart quotes)', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -f=“Def Leppard” Def Leppard'
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
  it('should return phrase with Ghost', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -font="Ghost" 2spooky4me'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `\`\`\`           .-')     _ (\`-.                           .-. .-')                         _   .-')       ('-.   
          ( OO ).  ( (OO  )                          \\  ( OO )                       ( '.( OO )_   _(  OO)  
 .-----. (_)---\\_)_.\`     \\ .-'),-----.  .-'),-----. ,--. ,--.   ,--.   ,--.   .---.  ,--.   ,--.)(,------. 
/ ,-.   \\/    _ |(__...--''( OO'  .-.  '( OO'  .-.  '|  .'   /    \\  \`.'  /   / .  |  |   \`.'   |  |  .---' 
'-'  |  |\\  :\` \`. |  /  | |/   |  | |  |/   |  | |  ||      /,  .-')     /   / /|  |  |         |  |  |     
   .'  /  '..\`''.)|  |_.' |\\_) |  |\\|  |\\_) |  |\\|  ||     ' _)(OO  \\   /   / / |  |_ |  |'.'|  | (|  '--.  
 .'  /__ .-._)   \\|  .___.'  \\ |  | |  |  \\ |  | |  ||  .   \\   |   /  /\\_ /  '-'    ||  |   |  |  |  .--'  
|       |\\       /|  |        \`'  '-'  '   \`'  '-'  '|  |\\   \\  \`-./  /.__)\`----|  |-'|  |   |  |  |  \`---. 
\`-------' \`-----' \`--'          \`-----'      \`-----' \`--' '--'    \`--'          \`--'  \`--'   \`--'  \`------' \`\`\``);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return phrase with Ghost when given case in sensitive', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -font="GhOsT" 2spooky4me'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `\`\`\`           .-')     _ (\`-.                           .-. .-')                         _   .-')       ('-.   
          ( OO ).  ( (OO  )                          \\  ( OO )                       ( '.( OO )_   _(  OO)  
 .-----. (_)---\\_)_.\`     \\ .-'),-----.  .-'),-----. ,--. ,--.   ,--.   ,--.   .---.  ,--.   ,--.)(,------. 
/ ,-.   \\/    _ |(__...--''( OO'  .-.  '( OO'  .-.  '|  .'   /    \\  \`.'  /   / .  |  |   \`.'   |  |  .---' 
'-'  |  |\\  :\` \`. |  /  | |/   |  | |  |/   |  | |  ||      /,  .-')     /   / /|  |  |         |  |  |     
   .'  /  '..\`''.)|  |_.' |\\_) |  |\\|  |\\_) |  |\\|  ||     ' _)(OO  \\   /   / / |  |_ |  |'.'|  | (|  '--.  
 .'  /__ .-._)   \\|  .___.'  \\ |  | |  |  \\ |  | |  ||  .   \\   |   /  /\\_ /  '-'    ||  |   |  |  |  .--'  
|       |\\       /|  |        \`'  '-'  '   \`'  '-'  '|  |\\   \\  \`-./  /.__)\`----|  |-'|  |   |  |  |  \`---. 
\`-------' \`-----' \`--'          \`-----'      \`-----' \`--' '--'    \`--'          \`--'  \`--'   \`--'  \`------' \`\`\``);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return phrase with Ghost (smart-quotes)', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -font=“Ghost” 2spooky4me'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `\`\`\`           .-')     _ (\`-.                           .-. .-')                         _   .-')       ('-.   
          ( OO ).  ( (OO  )                          \\  ( OO )                       ( '.( OO )_   _(  OO)  
 .-----. (_)---\\_)_.\`     \\ .-'),-----.  .-'),-----. ,--. ,--.   ,--.   ,--.   .---.  ,--.   ,--.)(,------. 
/ ,-.   \\/    _ |(__...--''( OO'  .-.  '( OO'  .-.  '|  .'   /    \\  \`.'  /   / .  |  |   \`.'   |  |  .---' 
'-'  |  |\\  :\` \`. |  /  | |/   |  | |  |/   |  | |  ||      /,  .-')     /   / /|  |  |         |  |  |     
   .'  /  '..\`''.)|  |_.' |\\_) |  |\\|  |\\_) |  |\\|  ||     ' _)(OO  \\   /   / / |  |_ |  |'.'|  | (|  '--.  
 .'  /__ .-._)   \\|  .___.'  \\ |  | |  |  \\ |  | |  ||  .   \\   |   /  /\\_ /  '-'    ||  |   |  |  |  .--'  
|       |\\       /|  |        \`'  '-'  '   \`'  '-'  '|  |\\   \\  \`-./  /.__)\`----|  |-'|  |   |  |  |  \`---. 
\`-------' \`-----' \`--'          \`-----'      \`-----' \`--' '--'    \`--'          \`--'  \`--'   \`--'  \`------' \`\`\``);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });

  it('should return phrase with Ghost (short-hand)', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -f="Ghost" 2spooky4me'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `\`\`\`           .-')     _ (\`-.                           .-. .-')                         _   .-')       ('-.   
          ( OO ).  ( (OO  )                          \\  ( OO )                       ( '.( OO )_   _(  OO)  
 .-----. (_)---\\_)_.\`     \\ .-'),-----.  .-'),-----. ,--. ,--.   ,--.   ,--.   .---.  ,--.   ,--.)(,------. 
/ ,-.   \\/    _ |(__...--''( OO'  .-.  '( OO'  .-.  '|  .'   /    \\  \`.'  /   / .  |  |   \`.'   |  |  .---' 
'-'  |  |\\  :\` \`. |  /  | |/   |  | |  |/   |  | |  ||      /,  .-')     /   / /|  |  |         |  |  |     
   .'  /  '..\`''.)|  |_.' |\\_) |  |\\|  |\\_) |  |\\|  ||     ' _)(OO  \\   /   / / |  |_ |  |'.'|  | (|  '--.  
 .'  /__ .-._)   \\|  .___.'  \\ |  | |  |  \\ |  | |  ||  .   \\   |   /  /\\_ /  '-'    ||  |   |  |  |  .--'  
|       |\\       /|  |        \`'  '-'  '   \`'  '-'  '|  |\\   \\  \`-./  /.__)\`----|  |-'|  |   |  |  |  \`---. 
\`-------' \`-----' \`--'          \`-----'      \`-----' \`--' '--'    \`--'          \`--'  \`--'   \`--'  \`------' \`\`\``);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });

  it('should return phrase with Ghost (short-hand && insensitivity)', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -f="gHoSt" 2spooky4me'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `\`\`\`           .-')     _ (\`-.                           .-. .-')                         _   .-')       ('-.   
          ( OO ).  ( (OO  )                          \\  ( OO )                       ( '.( OO )_   _(  OO)  
 .-----. (_)---\\_)_.\`     \\ .-'),-----.  .-'),-----. ,--. ,--.   ,--.   ,--.   .---.  ,--.   ,--.)(,------. 
/ ,-.   \\/    _ |(__...--''( OO'  .-.  '( OO'  .-.  '|  .'   /    \\  \`.'  /   / .  |  |   \`.'   |  |  .---' 
'-'  |  |\\  :\` \`. |  /  | |/   |  | |  |/   |  | |  ||      /,  .-')     /   / /|  |  |         |  |  |     
   .'  /  '..\`''.)|  |_.' |\\_) |  |\\|  |\\_) |  |\\|  ||     ' _)(OO  \\   /   / / |  |_ |  |'.'|  | (|  '--.  
 .'  /__ .-._)   \\|  .___.'  \\ |  | |  |  \\ |  | |  ||  .   \\   |   /  /\\_ /  '-'    ||  |   |  |  |  .--'  
|       |\\       /|  |        \`'  '-'  '   \`'  '-'  '|  |\\   \\  \`-./  /.__)\`----|  |-'|  |   |  |  |  \`---. 
\`-------' \`-----' \`--'          \`-----'      \`-----' \`--' '--'    \`--'          \`--'  \`--'   \`--'  \`------' \`\`\``);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
  it('should return phrase with Ghost (short-hand && smart quotes)', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -f=“Ghost” 2spooky4me'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain('<@U2147483697>');
    expect(response_type).toEqual("in_channel");
    expect(text).toEqual(
      `\`\`\`           .-')     _ (\`-.                           .-. .-')                         _   .-')       ('-.   
          ( OO ).  ( (OO  )                          \\  ( OO )                       ( '.( OO )_   _(  OO)  
 .-----. (_)---\\_)_.\`     \\ .-'),-----.  .-'),-----. ,--. ,--.   ,--.   ,--.   .---.  ,--.   ,--.)(,------. 
/ ,-.   \\/    _ |(__...--''( OO'  .-.  '( OO'  .-.  '|  .'   /    \\  \`.'  /   / .  |  |   \`.'   |  |  .---' 
'-'  |  |\\  :\` \`. |  /  | |/   |  | |  |/   |  | |  ||      /,  .-')     /   / /|  |  |         |  |  |     
   .'  /  '..\`''.)|  |_.' |\\_) |  |\\|  |\\_) |  |\\|  ||     ' _)(OO  \\   /   / / |  |_ |  |'.'|  | (|  '--.  
 .'  /__ .-._)   \\|  .___.'  \\ |  | |  |  \\ |  | |  ||  .   \\   |   /  /\\_ /  '-'    ||  |   |  |  |  .--'  
|       |\\       /|  |        \`'  '-'  '   \`'  '-'  '|  |\\   \\  \`-./  /.__)\`----|  |-'|  |   |  |  |  \`---. 
\`-------' \`-----' \`--'          \`-----'      \`-----' \`--' '--'    \`--'          \`--'  \`--'   \`--'  \`------' \`\`\``);
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });

  it('should return help', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -font="Def Leppard" Def -help Leppard'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain(`\`/exyos phrase Phrase Here\`
\`/exyos phrase -font=\"Def Leppard\" Phrase Here\`
\`/exyos phrase -f=\"Def Leppard\" Phrase Here\`
Available Fonts: 1Row, 3-D, 3D Diagonal, 3D-ASCII, 3x5, 4Max, 5 Line Oblique, AMC 3 Line, AMC 3 Liv1, AMC AAA01, AMC Neko, AMC Razor, AMC Razor2, AMC Slash, AMC Slider, AMC Thin, AMC Tubes, AMC Untitled, ANSI Shadow, ASCII New Roman, Abraxis-Big, Abraxis-Small, Acrobatic, Alligator, Alligator2, Alpha, Alphabet, Arrows, Avatar, Banner, Banner3, Banner3-D, Banner4, Barbwire, Basic, Bear, Bell, Benjamin, Bent, Big, Big Chief, Big Money-ne, Big Money-nw, Big Money-se, Big Money-sw, Bigfig, Binary, Blest, Block, Blocks, Bloody, Boie, Boie2, Bolger, Bone's Font, Braced, Bright, Broadway, Broadway KB, Bubble, Bulbhead, CaMiZ, Caligraphy, Caligraphy2, Calvin S, Cards, Catwalk, CeA, CeA2, Cheese, Chiseled, Chunky, Coinstak, Cola, Colossal, Computer, Contessa, Contrast, Cosmike, Crawford, Crawford2, Crazy, Cricket, Cursive, Cyberlarge, Cybermedium, Cybersmall, Cygnet, DANC4, DWhistled, DaiR, Dancing Font, Decimal, Def Leppard, Delta Corps Priest 1, Diamond, Diet Cola, Digital, Doh, Doom, Dot Matrix, Double, Double Shorts, Dr Pepper, Efti Chess, Efti Font, Efti Italic, Efti Piti, Efti Robot, Efti Wall, Efti Water, Electronic, Elite, Epic, Fender, Filter, Filth, Fire Font-k, Fire Font-s, Flipped, Flower Power, FoGG, Four Tops, Fraktur, Fun Face, Fun Faces, Fuzzy, Galactus, Georgi16, Georgia11, Ghost, Ghoulish, Glenyn, Glue, Goofy, Gothic, Graceful, Gradient, Graffiti, Greek, HeX's Font, Heart Left, Heart Right, Hellfire, Henry 3D, Hex, Hieroglyphs, Hollywood, Horizontal Left, Horizontal Right, ICL-1900, Impossible, Invita, Isometric1, Isometric2, Isometric3, Isometric4, Italic, Ivrit, JS Block Letters, JS Bracket Letters, JS Capital Curves, JS Cursive, JS Stick Letters, Jacky, Jazmine, Jerusalem, Katakana, Kban, Keyboard, Knob, LCD, Larry 3D, Lean, Letters, Lil Devil, Line Blocks, Linux, Lockergnome, Madrid, Marquee, Maxfour, MeDi, Mer, Merlin1, Merlin2, Mike, Mini, Mirror, Mnemonic, Modular, Morse, Moscow, Mshebrew210, Muzzle, NScript, NT Greek, NV Script, Nancyj, Nancyj-Fancy, Nancyj-Underlined, Nipples, O8, OS2, Octal, Ogre, Old Banner, Patorjk's Cheese, Patorjk-HeX, Pawp, Peaks, Peaks Slant, Pebbles, Pepper, Poison, PsY, PsY2, Puffy, Puzzle, Pyramid, Rammstein, Rectangles, Reeko Font 1, Relief, Relief2, Reverse, Ribbit, Ribbit2, Ribbit3, Roman, Rotated, Rounded, Rowan Cap, Rozzo, Runic, Runyc, S Blood, SL Script, Santa Clara, Script, Serifcap, Shadow, Shimrod, Short, Slant, Slant Relief, Slide, Small, Small Caps, Small Isometric1, Small Keyboard, Small Poison, Small Script, Small Shadow, Small Slant, Small Tengwar, Soft, Sony, Speed, Spliff, Stacey, Stampate, Stampatello, Standard, Star Strips, Star Wars, Stellar, Stforek, Stick Letters, Stop, Straight, Stronger Than All, Sub-Zero, Swamp Land, Swan, Sweet, THIS, TRaC, TRaC Mini, TRaC Tiny, TRaC's Old School Font, Tanja, Tengwar, Term, Test1, The Edge, Thick, Thin, Thorned, Three Point, Ticks, Ticks Slant, Tiles, Tinker-Toy, Tombstone, Train, Trek, Tsalagi, Tubular, Twiggy, Twisted, Two Point, USA Flag, Univers, Varsity, Wavy, Weird, Wet Letter, Whimsy, Wow, X-Pose, X99, X992, Zodi`);
    expect(response_type).toEqual("ephemeral");
    expect(text).toEqual('Phrase Usage');
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });

  it('should return help when given bad font', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -font="Poopy" Def Leppard'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain(`Available Fonts: 1Row, 3-D, 3D Diagonal, 3D-ASCII, 3x5, 4Max, 5 Line Oblique, AMC 3 Line, AMC 3 Liv1, AMC AAA01, AMC Neko, AMC Razor, AMC Razor2, AMC Slash, AMC Slider, AMC Thin, AMC Tubes, AMC Untitled, ANSI Shadow, ASCII New Roman, Abraxis-Big, Abraxis-Small, Acrobatic, Alligator, Alligator2, Alpha, Alphabet, Arrows, Avatar, Banner, Banner3, Banner3-D, Banner4, Barbwire, Basic, Bear, Bell, Benjamin, Bent, Big, Big Chief, Big Money-ne, Big Money-nw, Big Money-se, Big Money-sw, Bigfig, Binary, Blest, Block, Blocks, Bloody, Boie, Boie2, Bolger, Bone's Font, Braced, Bright, Broadway, Broadway KB, Bubble, Bulbhead, CaMiZ, Caligraphy, Caligraphy2, Calvin S, Cards, Catwalk, CeA, CeA2, Cheese, Chiseled, Chunky, Coinstak, Cola, Colossal, Computer, Contessa, Contrast, Cosmike, Crawford, Crawford2, Crazy, Cricket, Cursive, Cyberlarge, Cybermedium, Cybersmall, Cygnet, DANC4, DWhistled, DaiR, Dancing Font, Decimal, Def Leppard, Delta Corps Priest 1, Diamond, Diet Cola, Digital, Doh, Doom, Dot Matrix, Double, Double Shorts, Dr Pepper, Efti Chess, Efti Font, Efti Italic, Efti Piti, Efti Robot, Efti Wall, Efti Water, Electronic, Elite, Epic, Fender, Filter, Filth, Fire Font-k, Fire Font-s, Flipped, Flower Power, FoGG, Four Tops, Fraktur, Fun Face, Fun Faces, Fuzzy, Galactus, Georgi16, Georgia11, Ghost, Ghoulish, Glenyn, Glue, Goofy, Gothic, Graceful, Gradient, Graffiti, Greek, HeX's Font, Heart Left, Heart Right, Hellfire, Henry 3D, Hex, Hieroglyphs, Hollywood, Horizontal Left, Horizontal Right, ICL-1900, Impossible, Invita, Isometric1, Isometric2, Isometric3, Isometric4, Italic, Ivrit, JS Block Letters, JS Bracket Letters, JS Capital Curves, JS Cursive, JS Stick Letters, Jacky, Jazmine, Jerusalem, Katakana, Kban, Keyboard, Knob, LCD, Larry 3D, Lean, Letters, Lil Devil, Line Blocks, Linux, Lockergnome, Madrid, Marquee, Maxfour, MeDi, Mer, Merlin1, Merlin2, Mike, Mini, Mirror, Mnemonic, Modular, Morse, Moscow, Mshebrew210, Muzzle, NScript, NT Greek, NV Script, Nancyj, Nancyj-Fancy, Nancyj-Underlined, Nipples, O8, OS2, Octal, Ogre, Old Banner, Patorjk's Cheese, Patorjk-HeX, Pawp, Peaks, Peaks Slant, Pebbles, Pepper, Poison, PsY, PsY2, Puffy, Puzzle, Pyramid, Rammstein, Rectangles, Reeko Font 1, Relief, Relief2, Reverse, Ribbit, Ribbit2, Ribbit3, Roman, Rotated, Rounded, Rowan Cap, Rozzo, Runic, Runyc, S Blood, SL Script, Santa Clara, Script, Serifcap, Shadow, Shimrod, Short, Slant, Slant Relief, Slide, Small, Small Caps, Small Isometric1, Small Keyboard, Small Poison, Small Script, Small Shadow, Small Slant, Small Tengwar, Soft, Sony, Speed, Spliff, Stacey, Stampate, Stampatello, Standard, Star Strips, Star Wars, Stellar, Stforek, Stick Letters, Stop, Straight, Stronger Than All, Sub-Zero, Swamp Land, Swan, Sweet, THIS, TRaC, TRaC Mini, TRaC Tiny, TRaC's Old School Font, Tanja, Tengwar, Term, Test1, The Edge, Thick, Thin, Thorned, Three Point, Ticks, Ticks Slant, Tiles, Tinker-Toy, Tombstone, Train, Trek, Tsalagi, Tubular, Twiggy, Twisted, Two Point, USA Flag, Univers, Varsity, Wavy, Weird, Wet Letter, Whimsy, Wow, X-Pose, X99, X992, Zodi`);
    expect(response_type).toEqual("ephemeral");
    expect(text).toEqual('Unknown Font: "Poopy"');
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });

  it('should return help when given bad font (smart-quotes)', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -font=“Poopy” Def Leppard'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain(`Available Fonts: 1Row, 3-D, 3D Diagonal, 3D-ASCII, 3x5, 4Max, 5 Line Oblique, AMC 3 Line, AMC 3 Liv1, AMC AAA01, AMC Neko, AMC Razor, AMC Razor2, AMC Slash, AMC Slider, AMC Thin, AMC Tubes, AMC Untitled, ANSI Shadow, ASCII New Roman, Abraxis-Big, Abraxis-Small, Acrobatic, Alligator, Alligator2, Alpha, Alphabet, Arrows, Avatar, Banner, Banner3, Banner3-D, Banner4, Barbwire, Basic, Bear, Bell, Benjamin, Bent, Big, Big Chief, Big Money-ne, Big Money-nw, Big Money-se, Big Money-sw, Bigfig, Binary, Blest, Block, Blocks, Bloody, Boie, Boie2, Bolger, Bone's Font, Braced, Bright, Broadway, Broadway KB, Bubble, Bulbhead, CaMiZ, Caligraphy, Caligraphy2, Calvin S, Cards, Catwalk, CeA, CeA2, Cheese, Chiseled, Chunky, Coinstak, Cola, Colossal, Computer, Contessa, Contrast, Cosmike, Crawford, Crawford2, Crazy, Cricket, Cursive, Cyberlarge, Cybermedium, Cybersmall, Cygnet, DANC4, DWhistled, DaiR, Dancing Font, Decimal, Def Leppard, Delta Corps Priest 1, Diamond, Diet Cola, Digital, Doh, Doom, Dot Matrix, Double, Double Shorts, Dr Pepper, Efti Chess, Efti Font, Efti Italic, Efti Piti, Efti Robot, Efti Wall, Efti Water, Electronic, Elite, Epic, Fender, Filter, Filth, Fire Font-k, Fire Font-s, Flipped, Flower Power, FoGG, Four Tops, Fraktur, Fun Face, Fun Faces, Fuzzy, Galactus, Georgi16, Georgia11, Ghost, Ghoulish, Glenyn, Glue, Goofy, Gothic, Graceful, Gradient, Graffiti, Greek, HeX's Font, Heart Left, Heart Right, Hellfire, Henry 3D, Hex, Hieroglyphs, Hollywood, Horizontal Left, Horizontal Right, ICL-1900, Impossible, Invita, Isometric1, Isometric2, Isometric3, Isometric4, Italic, Ivrit, JS Block Letters, JS Bracket Letters, JS Capital Curves, JS Cursive, JS Stick Letters, Jacky, Jazmine, Jerusalem, Katakana, Kban, Keyboard, Knob, LCD, Larry 3D, Lean, Letters, Lil Devil, Line Blocks, Linux, Lockergnome, Madrid, Marquee, Maxfour, MeDi, Mer, Merlin1, Merlin2, Mike, Mini, Mirror, Mnemonic, Modular, Morse, Moscow, Mshebrew210, Muzzle, NScript, NT Greek, NV Script, Nancyj, Nancyj-Fancy, Nancyj-Underlined, Nipples, O8, OS2, Octal, Ogre, Old Banner, Patorjk's Cheese, Patorjk-HeX, Pawp, Peaks, Peaks Slant, Pebbles, Pepper, Poison, PsY, PsY2, Puffy, Puzzle, Pyramid, Rammstein, Rectangles, Reeko Font 1, Relief, Relief2, Reverse, Ribbit, Ribbit2, Ribbit3, Roman, Rotated, Rounded, Rowan Cap, Rozzo, Runic, Runyc, S Blood, SL Script, Santa Clara, Script, Serifcap, Shadow, Shimrod, Short, Slant, Slant Relief, Slide, Small, Small Caps, Small Isometric1, Small Keyboard, Small Poison, Small Script, Small Shadow, Small Slant, Small Tengwar, Soft, Sony, Speed, Spliff, Stacey, Stampate, Stampatello, Standard, Star Strips, Star Wars, Stellar, Stforek, Stick Letters, Stop, Straight, Stronger Than All, Sub-Zero, Swamp Land, Swan, Sweet, THIS, TRaC, TRaC Mini, TRaC Tiny, TRaC's Old School Font, Tanja, Tengwar, Term, Test1, The Edge, Thick, Thin, Thorned, Three Point, Ticks, Ticks Slant, Tiles, Tinker-Toy, Tombstone, Train, Trek, Tsalagi, Tubular, Twiggy, Twisted, Two Point, USA Flag, Univers, Varsity, Wavy, Weird, Wet Letter, Whimsy, Wow, X-Pose, X99, X992, Zodi`);
    expect(response_type).toEqual("ephemeral");
    expect(text).toEqual('Unknown Font: "Poopy"');
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });

  it('should return help when given bad incomplete font', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -font="Poopy Def Leppard'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain(`Available Fonts: 1Row, 3-D, 3D Diagonal, 3D-ASCII, 3x5, 4Max, 5 Line Oblique, AMC 3 Line, AMC 3 Liv1, AMC AAA01, AMC Neko, AMC Razor, AMC Razor2, AMC Slash, AMC Slider, AMC Thin, AMC Tubes, AMC Untitled, ANSI Shadow, ASCII New Roman, Abraxis-Big, Abraxis-Small, Acrobatic, Alligator, Alligator2, Alpha, Alphabet, Arrows, Avatar, Banner, Banner3, Banner3-D, Banner4, Barbwire, Basic, Bear, Bell, Benjamin, Bent, Big, Big Chief, Big Money-ne, Big Money-nw, Big Money-se, Big Money-sw, Bigfig, Binary, Blest, Block, Blocks, Bloody, Boie, Boie2, Bolger, Bone's Font, Braced, Bright, Broadway, Broadway KB, Bubble, Bulbhead, CaMiZ, Caligraphy, Caligraphy2, Calvin S, Cards, Catwalk, CeA, CeA2, Cheese, Chiseled, Chunky, Coinstak, Cola, Colossal, Computer, Contessa, Contrast, Cosmike, Crawford, Crawford2, Crazy, Cricket, Cursive, Cyberlarge, Cybermedium, Cybersmall, Cygnet, DANC4, DWhistled, DaiR, Dancing Font, Decimal, Def Leppard, Delta Corps Priest 1, Diamond, Diet Cola, Digital, Doh, Doom, Dot Matrix, Double, Double Shorts, Dr Pepper, Efti Chess, Efti Font, Efti Italic, Efti Piti, Efti Robot, Efti Wall, Efti Water, Electronic, Elite, Epic, Fender, Filter, Filth, Fire Font-k, Fire Font-s, Flipped, Flower Power, FoGG, Four Tops, Fraktur, Fun Face, Fun Faces, Fuzzy, Galactus, Georgi16, Georgia11, Ghost, Ghoulish, Glenyn, Glue, Goofy, Gothic, Graceful, Gradient, Graffiti, Greek, HeX's Font, Heart Left, Heart Right, Hellfire, Henry 3D, Hex, Hieroglyphs, Hollywood, Horizontal Left, Horizontal Right, ICL-1900, Impossible, Invita, Isometric1, Isometric2, Isometric3, Isometric4, Italic, Ivrit, JS Block Letters, JS Bracket Letters, JS Capital Curves, JS Cursive, JS Stick Letters, Jacky, Jazmine, Jerusalem, Katakana, Kban, Keyboard, Knob, LCD, Larry 3D, Lean, Letters, Lil Devil, Line Blocks, Linux, Lockergnome, Madrid, Marquee, Maxfour, MeDi, Mer, Merlin1, Merlin2, Mike, Mini, Mirror, Mnemonic, Modular, Morse, Moscow, Mshebrew210, Muzzle, NScript, NT Greek, NV Script, Nancyj, Nancyj-Fancy, Nancyj-Underlined, Nipples, O8, OS2, Octal, Ogre, Old Banner, Patorjk's Cheese, Patorjk-HeX, Pawp, Peaks, Peaks Slant, Pebbles, Pepper, Poison, PsY, PsY2, Puffy, Puzzle, Pyramid, Rammstein, Rectangles, Reeko Font 1, Relief, Relief2, Reverse, Ribbit, Ribbit2, Ribbit3, Roman, Rotated, Rounded, Rowan Cap, Rozzo, Runic, Runyc, S Blood, SL Script, Santa Clara, Script, Serifcap, Shadow, Shimrod, Short, Slant, Slant Relief, Slide, Small, Small Caps, Small Isometric1, Small Keyboard, Small Poison, Small Script, Small Shadow, Small Slant, Small Tengwar, Soft, Sony, Speed, Spliff, Stacey, Stampate, Stampatello, Standard, Star Strips, Star Wars, Stellar, Stforek, Stick Letters, Stop, Straight, Stronger Than All, Sub-Zero, Swamp Land, Swan, Sweet, THIS, TRaC, TRaC Mini, TRaC Tiny, TRaC's Old School Font, Tanja, Tengwar, Term, Test1, The Edge, Thick, Thin, Thorned, Three Point, Ticks, Ticks Slant, Tiles, Tinker-Toy, Tombstone, Train, Trek, Tsalagi, Tubular, Twiggy, Twisted, Two Point, USA Flag, Univers, Varsity, Wavy, Weird, Wet Letter, Whimsy, Wow, X-Pose, X99, X992, Zodi`);
    expect(response_type).toEqual("ephemeral");
    expect(text).toEqual('Unknown Font: "Poopy Def Leppard"');
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });

  it('should return help when given bad incomplete font (smart quotes)', async () => {
    const headers = {
      'X-Slack-Request-Timestamp': 'aoeu'
    };
    const request = {
      header: header => headers[header],
      body: {
        ...BASE_REQUEST,
        text: 'phrase -font=“Poopy Def Leppard'
      }
    };
    const {exyosResponse : { attachments, response_type, text }, slackUrl} = await generateResponse(request);
    expect(attachments[0].text).toContain(`Available Fonts: 1Row, 3-D, 3D Diagonal, 3D-ASCII, 3x5, 4Max, 5 Line Oblique, AMC 3 Line, AMC 3 Liv1, AMC AAA01, AMC Neko, AMC Razor, AMC Razor2, AMC Slash, AMC Slider, AMC Thin, AMC Tubes, AMC Untitled, ANSI Shadow, ASCII New Roman, Abraxis-Big, Abraxis-Small, Acrobatic, Alligator, Alligator2, Alpha, Alphabet, Arrows, Avatar, Banner, Banner3, Banner3-D, Banner4, Barbwire, Basic, Bear, Bell, Benjamin, Bent, Big, Big Chief, Big Money-ne, Big Money-nw, Big Money-se, Big Money-sw, Bigfig, Binary, Blest, Block, Blocks, Bloody, Boie, Boie2, Bolger, Bone's Font, Braced, Bright, Broadway, Broadway KB, Bubble, Bulbhead, CaMiZ, Caligraphy, Caligraphy2, Calvin S, Cards, Catwalk, CeA, CeA2, Cheese, Chiseled, Chunky, Coinstak, Cola, Colossal, Computer, Contessa, Contrast, Cosmike, Crawford, Crawford2, Crazy, Cricket, Cursive, Cyberlarge, Cybermedium, Cybersmall, Cygnet, DANC4, DWhistled, DaiR, Dancing Font, Decimal, Def Leppard, Delta Corps Priest 1, Diamond, Diet Cola, Digital, Doh, Doom, Dot Matrix, Double, Double Shorts, Dr Pepper, Efti Chess, Efti Font, Efti Italic, Efti Piti, Efti Robot, Efti Wall, Efti Water, Electronic, Elite, Epic, Fender, Filter, Filth, Fire Font-k, Fire Font-s, Flipped, Flower Power, FoGG, Four Tops, Fraktur, Fun Face, Fun Faces, Fuzzy, Galactus, Georgi16, Georgia11, Ghost, Ghoulish, Glenyn, Glue, Goofy, Gothic, Graceful, Gradient, Graffiti, Greek, HeX's Font, Heart Left, Heart Right, Hellfire, Henry 3D, Hex, Hieroglyphs, Hollywood, Horizontal Left, Horizontal Right, ICL-1900, Impossible, Invita, Isometric1, Isometric2, Isometric3, Isometric4, Italic, Ivrit, JS Block Letters, JS Bracket Letters, JS Capital Curves, JS Cursive, JS Stick Letters, Jacky, Jazmine, Jerusalem, Katakana, Kban, Keyboard, Knob, LCD, Larry 3D, Lean, Letters, Lil Devil, Line Blocks, Linux, Lockergnome, Madrid, Marquee, Maxfour, MeDi, Mer, Merlin1, Merlin2, Mike, Mini, Mirror, Mnemonic, Modular, Morse, Moscow, Mshebrew210, Muzzle, NScript, NT Greek, NV Script, Nancyj, Nancyj-Fancy, Nancyj-Underlined, Nipples, O8, OS2, Octal, Ogre, Old Banner, Patorjk's Cheese, Patorjk-HeX, Pawp, Peaks, Peaks Slant, Pebbles, Pepper, Poison, PsY, PsY2, Puffy, Puzzle, Pyramid, Rammstein, Rectangles, Reeko Font 1, Relief, Relief2, Reverse, Ribbit, Ribbit2, Ribbit3, Roman, Rotated, Rounded, Rowan Cap, Rozzo, Runic, Runyc, S Blood, SL Script, Santa Clara, Script, Serifcap, Shadow, Shimrod, Short, Slant, Slant Relief, Slide, Small, Small Caps, Small Isometric1, Small Keyboard, Small Poison, Small Script, Small Shadow, Small Slant, Small Tengwar, Soft, Sony, Speed, Spliff, Stacey, Stampate, Stampatello, Standard, Star Strips, Star Wars, Stellar, Stforek, Stick Letters, Stop, Straight, Stronger Than All, Sub-Zero, Swamp Land, Swan, Sweet, THIS, TRaC, TRaC Mini, TRaC Tiny, TRaC's Old School Font, Tanja, Tengwar, Term, Test1, The Edge, Thick, Thin, Thorned, Three Point, Ticks, Ticks Slant, Tiles, Tinker-Toy, Tombstone, Train, Trek, Tsalagi, Tubular, Twiggy, Twisted, Two Point, USA Flag, Univers, Varsity, Wavy, Weird, Wet Letter, Whimsy, Wow, X-Pose, X99, X992, Zodi`);
    expect(response_type).toEqual("ephemeral");
    expect(text).toEqual('Unknown Font: "Poopy Def Leppard"');
    expect(slackUrl).toEqual('https://hooks.slack.com/commands/1234/5678');
  });
});
