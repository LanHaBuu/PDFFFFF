import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { BullModule } from '@nestjs/bull';

@Module({
    // imports:[
    //     BullModule.registerQueue({
    //         name: 'PDF',
    //       })
    // ],
    controllers: [UserController],
    providers: [UserService]
})

export class UserModule { }