export default class CommandError {
  failureResponse: string;
  tip: string;
  constructor(failureResponse?: string, tip?: string) {
    this.failureResponse = failureResponse;
    this.tip = tip;
  }
}
