function CommandError(failureResponse, tip) {
  this.failureResponse = failureResponse;
  this.tip = tip;
  return this;
}

module.exports = CommandError;
