const isSlackRequest = request =>
  request && request.header &&
  request.header('X-Slack-Request-Timestamp');//todo: validate request

module .exports = {
  isSlackRequest,
};
