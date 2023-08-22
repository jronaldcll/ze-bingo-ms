import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const http = context.switchToHttp();
    console.log('input', JSON.stringify(http.getRequest().body));
    return next.handle().pipe(
      map((data) => {
        console.log('output', JSON.stringify(data));
        return data;
      }),
    );
  }
}
