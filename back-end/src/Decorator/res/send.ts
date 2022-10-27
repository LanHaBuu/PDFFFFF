import { NestInterceptor, ExecutionContext, CallHandler, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';;

@Injectable()
export class SendDecorator implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        let res = context.switchToHttp().getResponse();
        return next
            .handle()
            .pipe(
                tap((result) => {
                    res.set({ 'Content-Type': 'application/pdf' });
                    res.send(result)
                }
                ),
            );
    }
}