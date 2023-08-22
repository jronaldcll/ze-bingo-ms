import * as momentTz from 'moment-timezone';
import { HttpStatus, ExceptionFilter, ArgumentsHost } from '@nestjs/common';

export class BaseException {
  constructor(
    public code: number = HttpStatus.INTERNAL_SERVER_ERROR,
    public message: string = 'Error del servidor.',
    private readonly data: any = [],
  ) {
    this.code = code;
    this.message = message;
  }
}

export class UnauthorizedException extends BaseException {
  constructor(code: number, message: string) {
    super(code, message, []);
  }
}

export class BadRequestException extends BaseException {
  constructor(code: number, message: string) {
    super(code, message, []);
  }
}

export class ConflictException extends BaseException {
  constructor(code: number, message: string) {
    super(code, message, []);
  }
}

export class NotFoundException extends BaseException {
  constructor(code: number, message: string) {
    super(code, message, []);
  }
}

export class RequestTimeoutException extends BaseException {
  constructor(code: number, message: string) {
    super(code, message, []);
  }
}

export class ValidationException extends BaseException {
  constructor(code: number, message: string) {
    super(code, message, []);
  }
}

export class TokenException extends BaseException {
  constructor(code: number, message: string) {
    super(code, message, []);
  }
}

export class DatabaseException extends BaseException {
  constructor(code: number, message: string) {
    super(code, message, []);
  }
}

export class InternalServerErrorException extends BaseException {
  constructor(code: number, message: string) {
    super(code, message, []);
  }
}

export class ServiceExceptionFilter implements ExceptionFilter {
  public catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response: any = ctx.getResponse<Response>();

    if (exception instanceof UnauthorizedException) {
      response.code(HttpStatus.UNAUTHORIZED);
      response.send(exception);
    }

    if (exception instanceof ConflictException) {
      response.code(HttpStatus.CONFLICT);
      response.send(exception);
    }

    if (exception instanceof NotFoundException) {
      response.code(HttpStatus.NOT_FOUND);
      response.send(exception);
    }

    if (exception instanceof InternalServerErrorException) {
      response.code(HttpStatus.INTERNAL_SERVER_ERROR);
      response.send(exception);
    }

    if (
      exception instanceof ValidationException ||
      exception instanceof DatabaseException
    ) {
      response.code(HttpStatus.OK);
      response.send(exception);
    }
  }
}

export class ServiceGenericExceptionFilter implements ExceptionFilter {
  public catch(exception: unknown, host: ArgumentsHost) {
    let respSend: any;
    const ctx = host.switchToHttp();
    const request: any = ctx.getRequest<Request>();
    const response: any = ctx.getResponse<Response>();
    const resp = {
      resultDescription: 'Datos inválidos',
      resultCode: 102,
    };
    respSend = { ...resp };
    if (request.body != null) {
      respSend = {
        ...resp,
        operationDate: momentTz(new Date()).utc().format(),
      };
    }

    if (
      exception instanceof ValidationException ||
      exception instanceof TokenException
    ) {
      respSend.resultDescription = exception.message;
      respSend.resultCode = exception.code;
      response.code(HttpStatus.OK);
      response.send(respSend);
    }

    if (
      exception instanceof InternalServerErrorException ||
      exception instanceof DatabaseException
    ) {
      respSend.resultDescription = exception.message;
      respSend.resultCode = exception.code;
      response.code(HttpStatus.INTERNAL_SERVER_ERROR);
      response.send(respSend);
    }

    if (exception instanceof BadRequestException) {
      respSend.resultDescription = exception.message;
      respSend.resultCode = exception.code;
      response.code(HttpStatus.BAD_REQUEST);
      response.send(respSend);
    }

    if (exception instanceof RequestTimeoutException) {
      respSend.resultDescription = exception.message;
      respSend.resultCode = exception.code;
      response.code(HttpStatus.REQUEST_TIMEOUT);
      response.send(respSend);
    }

    if (exception instanceof UnauthorizedException) {
      respSend.resultDescription = exception.message;
      respSend.resultCode = exception.code;
      response.code(HttpStatus.UNAUTHORIZED);
      response.send(respSend);
    }
  }
}
