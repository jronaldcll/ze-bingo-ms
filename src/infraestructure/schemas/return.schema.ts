export class BaseErrorSchema {
  description: string;
  resultCode: number;
  retryLater: boolean;
  providerTransactionId: string;
}

export class SuccessResponseToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}
