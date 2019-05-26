const {suddenlyPieces} = require('./Suddenly');

const defaultPhrase = '';

const renderSuddenly = phrase => {
  return Promise.resolve(suddenlyPieces.join(''));
}

const suddenlyCommand = userArguments => {
  const phrase = userArguments || defaultPhrase;
  return renderSuddenly(phrase.toLocaleUpperCase());
};

module.exports = {
  suddenlyCommand
};
