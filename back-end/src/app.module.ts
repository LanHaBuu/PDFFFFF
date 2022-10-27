import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
  imports: [ 
    RedisModule.forRoot({
      config: {
        host: 'localhost',
        port: 6379,
      }
    }),
  UserModule],

})
export class AppModule { }
