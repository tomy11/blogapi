import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { userProvider } from '../providers/user.provider';

@Module({
    imports: [DatabaseModule],
    providers: [...userProvider, UserService],
    controllers: [UserController],
    exports: [UserService]
})

export class UserModule {}