import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { blogProvider } from '../providers/blog.provider';
import { BlogService } from '../services/blog.service';
import { BlogController } from '../controllers/blog.controller';

@Module({
    imports: [DatabaseModule],
    providers: [...blogProvider, BlogService],
    controllers: [BlogController],
    exports: [BlogService]
})
export class BlogModule {}
