export default class CommandError {
  public failureResponse: string;
  public tip: string;
  constructor(failureResponse?: string, tip?: string) {
    this.failureResponse = failureResponse;
    this.tip = tip;
  }
}
