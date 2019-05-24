const suddenly = require('./Suddenly');

const suddenlyCommand = userArguments => {
  return Promise.resolve(suddenly);
};

module.exports = {
  suddenlyCommand
};
