import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { GetStatusException } from '../core/exceptions/status.exception';
import {
  ProductCreateException,
  ProductReversalException,
} from '../core/exceptions/product.exception';

@Catch(ProductCreateException, ProductReversalException, GetStatusException)
export class HttpExceptionFilter implements ExceptionFilter {
  public catch(
    exception:
      | ProductCreateException
      | ProductReversalException
      | GetStatusException,
    host: ArgumentsHost,
  ) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    console.log('Error:', JSON.stringify(exception));
    response.code(200);
    response.send(exception);
  }
}
