import { NestInterceptor, ExecutionContext, CallHandler, Injectable } from '@nestjs/common'
import { Observable,of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class DecoratorRedis implements NestInterceptor {
    constructor(@InjectRedis() private readonly redis: Redis) { }
    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
        let req = context.switchToHttp().getRequest();
        const {url} = req.params
        const data =  await this.redis.getBuffer(url)        
        if (data) {
            return of(data)
        }

        return next
            .handle()
            .pipe(
                tap(async (result) => {
                    const setNx = await this.redis.setnx('url',1)
                    if( setNx==1) {
                        console.log('ok');
                        this.redis.set(url,result)
                        // this.redis.del(url)
                    }
                //    this.redis.set(url,res)
                //    return res
                }
                ),
            );
    }
}