const {signPieces} = require('./Sign');

const SIGN_PADDING = 2;
const defaultPhrase = 'LOL I bet you cannot unread this.';

const padding = Array(SIGN_PADDING).fill().map(()=>' ').join('');
const signStartPadding = '|' + padding;
const signEndPadding = padding + '|';

const renderSign = phrase => {
  const {max, words} = phrase.split(' ').reduce((accum, word) => {
    if (word.length > accum.max) {
      accum.max = word.length
    }
    accum.words.push(word);
    return accum;
  }, {
    max: 0,
    words: []
  });

  const signLength = max + SIGN_PADDING * 2;
  const signTopper = Array(signLength).fill().map(()=>'￣  ').join('');
  const signSegments = words.map(word => `${signStartPadding}${word}${signEndPadding}`);
  const sign = [
    signTopper,
    ...signSegments,
    signTopper
  ].join('\n');

  return {
    sign
  };
};

const renderSignBunny = phrase =>{
  const {sign} = renderSign(phrase);
  console.log(sign)
  return Promise.resolve(signPieces.join())
}

const signCommand = userArguments => {
  const phrase = userArguments || defaultPhrase;
  return renderSignBunny(phrase);
};

module.exports = {
  signCommand
};
