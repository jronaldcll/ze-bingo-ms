import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '../exception/http-exceptions';
// import { AuthGuard } from '@nestjs/passport';

const unauthorizedError: string[] = ['Error'];
const invalidTokenError: string[] = ['SyntaxError', 'JsonWebTokenError'];
const expiredTokenError: string[] = ['TokenExpiredError'];
@Injectable()
// export class JwtAuthGuard extends AuthGuard('jwt') {
export class JwtAuthGuard {
  handleRequest(err, user, info: Error) {
    console.log(err);
    if (info) {
      if (unauthorizedError.includes(info.name)) {
        console.error('No autorizado.');
        throw new UnauthorizedException(141, 'No autorizado.');
      }
      if (invalidTokenError.includes(info.name)) {
        console.error('Token de acceso inválido.');
        throw new UnauthorizedException(142, 'Token de acceso inválido.');
      }
      if (expiredTokenError.includes(info.name)) {
        console.error('Token de acceso expirado.');
        throw new UnauthorizedException(143, 'Token de acceso expirado.');
      }
    }
    if (err) {
      throw err;
    }
    return user;
  }
}
