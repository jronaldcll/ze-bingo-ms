export class BaseRequestSchema {
  apiKey: string;
  providerTransactionId: string;
  merchant: string;
  ts: number;
  sig: string;
}

export class CreateProductRequestSchema extends BaseRequestSchema {
  sku: string;
  productDenomination: number;
  productCurrency: string;
  addlProductInfo: boolean;
}

export class CreateProductReversalRequestSchema extends BaseRequestSchema {
  sku: string;
  productDenomination: number;
  productCurrency: string;
}

export class CancelProductRequestSchema extends BaseRequestSchema {
  pin?: string;
  serialNumber?: string;
}

export class CancelProductReversalRequestSchema extends BaseRequestSchema {
  pin?: string;
  serialNumber?: string;
}

export class GetPinStatusSchema {
  apiKey: string;
  pin: string;
  product: string;
  ts: number;
  sig: string;
}
