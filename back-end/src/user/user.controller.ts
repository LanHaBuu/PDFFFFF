import { Controller, Get, Param, Response,Header,UseInterceptors } from '@nestjs/common'
import { UserService } from './user.service';
import { DecoratorRedis } from 'src/Decorator/redis/pdf';
import { SendDecorator } from 'src/Decorator/res/send';

@Controller('user')
export class UserController {
    constructor(private userService: UserService ){}

    @Get('/get/:url')
    @UseInterceptors(DecoratorRedis)
    @UseInterceptors(SendDecorator)
   create(@Param('url') url,@Response() res) {
        return this.userService.createPDF(url);      
        
        // await res.set({'Content-Type': 'application/pdf'});
        // await res.send(a)
    }




    // async create(@Response() res, @Param('url') url) {
    
    //     //@setRedis
    //     let data = await this.redis.getBuffer('data')
    //     if(!data) {
    //         const a = await this.userService.createPDF(url);
    //         await this.redis.set('data',a)
    //         res.send(a)
    //     }else {
    //         res.send(data)
    //     }
    // }


  
    @Get(':url')
    // @Header('Content-Length','Content-Type')
    async createYT(@Param('url') url: string) {
        await this.userService.createPDF(`${url}.com`);
        return url
    }
}