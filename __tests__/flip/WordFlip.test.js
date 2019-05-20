const {flipWord} = require('../../src/flip/WordFlip');

describe('Word Flip', () => {
  it('should flip all lower cased string', () => {
    const result = flipWord("thanks obama");
    expect(result).toEqual('ɐɯɐqo sʞuɐɥʇ')
  });
  it('should flip all capitalized proper noun string', () => {
    const result = flipWord("Thanks Obama");
    expect(result).toEqual('ɐɯɐqO sʞuɐɥ┴')
  });
  it('should flip all capitalized string', () => {
    const result = flipWord("THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG");
    expect(result).toEqual('פOp ⅄Z∀˥ ƎH┴ ɹƎΛO pƎԀW∩ſ XOℲ NʍOɹq ʞƆI∩b ƎH┴')
  });
  it('should flip all lowercase string', () => {
    const result = flipWord("the quick brown fox jumped over the lazy dog");
    expect(result).toEqual('ƃop ʎzɐן ǝɥʇ ɹǝʌo pǝdɯnɾ xoɟ uʍoɹq ʞɔınb ǝɥʇ')
  });
  it('should flip Z̴̧̤̣̖̝̳͈̞̔̍͛̿͡a̟̞͈̙̮͕̣̔͑̈́̈́̋̕͢͝͠͠l̺͓͎̹͙̦̝̙̐͂̒̐̃̅̎͐̀͜g̪̼̯̘̲̬̹͚̺̒̃͂̀̑̈͞ȏ̡̨̫̰͉̝̠͇̀̿̓͐̌̌͞͡ text', () => {
    const result = flipWord("Ḯ̴̲͙̝̞͚̟̓̆̈́͂͒̂͒̍ ą̡̩͙͖̮́͛̎̾̏̇͘͘͞m̸͚̺̻̬̝͍̗͇̋͑̏̓̉͒͑̚͢͟͡ b̶̘͕̲̹̩̺̤̔̊͗̇̎͑̕̚͜e̴̛̛̦͉̯͕͕̻̋̃́̇̌͟͝͞c̢̨̛͖͕̤̲͍̓́͑̃̅͢o̴̙͓̥̘͔̹͂͐̿̀͆̄́̍̇̕͜ͅm̷̰̝͇̼͕̲̹̋̿́̍̒͘͜ͅȩ̵̨̪̰̟͎̏̾̇̄̑̏̂͗ ḑ͉͕̯̭̈͊͂̌̂̿̀͘͡e̼̼̹̫͇͗̀͂̄͆́̊̓a̩̱͚̻̜̰͛̎̐̓̎̏́̕t̡̜̜̮̤͔̮̭̓͑͋͗͞͠h̴̛̳̰̦̬̝̹̤͎̬̀̃̍̚");
    expect(result).toEqual('̴̛̬͎̤̹̝̬̦̰̳̍̃̀̚ɥ̡̭̮͔̤̮̜̜͗͋͑̓͠͞ʇ̰̜̻͚̱̩́̏̎̓̐̎͛̕ɐ͇̫̹̼̼̓̊́͆̄͂̀͗ǝ̧̭̯͕͉̀̿̂̌͂͊̈͘͡p ̵̨̧͎̟̰̪͗̂̏̑̄̇̾̏ǝ̷̹̲͕̼͇̝̰̒̍́̿̋͘͜ͅɯ̴̹͔̘̥͓̙̇̍́̄͆̀̿͐͂̕͜ͅǫ̢̛͍̲̤͕͖̅̃͑́̓͢ɔ̴̛̛̻͕͕̯͉̦̌̇́̃̋͟͞͝ǝ̶̤̺̩̹̲͕̘͑̎̇͗̊̔̚̕͜q ̸͇̗͍̝̬̻̺͚͑͒̉̓̏͑̋̚͟͢͡ɯ̡̨̮͖͙̩̇̏̾̎͛́͘͘͞ɐ ̴̟͚̞̝͙̲̍͒̂͒͂̈́̆̓̈́I')
  });
});
