import { Injectable, Inject } from '@nestjs/common';
import { IAuthRepository } from 'src/core/repository/auth.repository';
import { TokenRequestDto } from 'src/interface/security/dto/token-request.dto';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { AuthorizeRequestSchema } from 'src/core/schemas/authorize-request.schema';
import { BadRequestException } from 'src/infraestructure/exception/http-exceptions';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_REPOSITORY')
    private authRepository: IAuthRepository,
  ) {}

  async authorize(request: TokenRequestDto): Promise<any> {
    const input: AuthorizeRequestSchema = plainToClass(
      AuthorizeRequestSchema,
      request,
    );
    const errors: ValidationError[] = await validate(input, {
      skipMissingProperties: true,
    });
    if (errors.length > 0) {
      console.log('Error de validación:', JSON.stringify(errors));
      throw new BadRequestException(102, 'Datos inválidos');
    }
    return this.authRepository.generateAccessToken(input);
  }
}
