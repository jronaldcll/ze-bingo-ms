import * as dotenv from 'dotenv';
import { IAuthRepository } from 'src/core/repository/auth.repository';
import { TokenException } from 'src/infraestructure/exception/http-exceptions';
import { AuthorizeRequestSchema } from 'src/core/schemas/authorize-request.schema';
import { SuccessResponseToken } from 'src/infraestructure/schemas/return.schema';

dotenv.config();

class AuthRepository implements IAuthRepository {
  // constructor() {}
  public async generateAccessToken(
    payload: AuthorizeRequestSchema,
  ): Promise<SuccessResponseToken> {
    try {
      if (
        payload.client_id == process.env.SECURE_COMPANYID &&
        payload.client_secret == process.env.SUCRE_SECRET
      ) {
        return {
          access_token: process.env.API_TOKEN_GENERIC,
          token_type: 'bearer',
          expires_in: 86400,
          scope: payload.scope,
        };
      } else {
        throw new TokenException(102, 'Hash inválido.');
      }
    } catch (error) {
      console.error(
        'Error en la generación del token para el payload',
        JSON.stringify(payload),
      );
      throw new TokenException(102, 'Hash inválido.');
    }
  }
}

export const authProviders = [
  {
    provide: 'AUTH_REPOSITORY',
    useFactory: () => {
      return new AuthRepository();
    },
  },
];
