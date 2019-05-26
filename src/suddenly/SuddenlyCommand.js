const {suddenlyPieces} = require('./Suddenly');

const defaultPhrase = '';

const renderSuddenly = phrase => {
  return Promise.resolve(suddenlyPieces
    .map((piece, index) => `${piece} ${(phrase.charAt(index) || '').toUpperCase()}`.trimRight())
    .join('\n'));
};

const suddenlyCommand = userArguments => {
  const phrase = userArguments || defaultPhrase;
  return renderSuddenly(phrase.toLocaleUpperCase());
};

module.exports = {
  suddenlyCommand
};
