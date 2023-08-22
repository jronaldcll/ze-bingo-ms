export class GetStatusException {
  private resultCode: number;
  private description: string;
  private retryLater: boolean;

  constructor(description: string, code = 1000) {
    this.resultCode = code;
    this.description = description;
    this.retryLater = true;
  }
}
