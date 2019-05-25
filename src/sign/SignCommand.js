const {signPieces} = require('./Sign');

const signCommand = userArguments => {
  return Promise.resolve(signPieces.join());
};

module.exports = {
  signCommand
};
