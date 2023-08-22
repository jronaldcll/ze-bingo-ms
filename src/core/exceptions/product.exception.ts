import { isEnabled } from 'unleash-client';

export class ProductCreateException {
  private resultCode: number;
  private description: string;
  private retryLater: boolean;
  private providerTransactionId: string;
  private action: string;

  constructor(
    description: string,
    code = 1000,
    providerTransactionId: string,
    action = '',
  ) {
    this.resultCode = code;
    this.description = description;
    this.retryLater = true;
    this.providerTransactionId = providerTransactionId;
    this.action = action;
  }
}

export class ProductReversalException {
  private resultCode: number;
  private description: string;
  private retryLater: boolean;
  private providerTransactionId: string;

  constructor(description: string, code = 1000, providerTransactionId: string) {
    this.resultCode = code;
    this.description = description;
    this.retryLater = true;
    this.providerTransactionId = providerTransactionId;
  }
}
