import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { postProvider } from '../providers/post.provider';
import { PostService } from '../services/post.service';
import { PostController } from '../controllers/post.controller';

@Module({
    imports: [DatabaseModule],
    providers: [...postProvider, PostService],
    controllers: [PostController],
    exports: [PostService]
})

export class PostModule {}