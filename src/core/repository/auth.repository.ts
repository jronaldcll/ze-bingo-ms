export interface IAuthRepository {
  // validate: (requestDate: string, hash: string) => void;
  // generateKeys: () => Record<string, any>;
  generateAccessToken(payload: any);
  // decodeAccessToken: (token: string) => Promise<any>;
}
