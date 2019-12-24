import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { commentProvider } from '../providers/comment.provider';
import { CommentService } from '../services/comment.service';
import { CommentController } from '../controllers/comment.controller';

@Module({
    imports: [DatabaseModule],
    providers: [...commentProvider, CommentService],
    controllers: [CommentController],
    exports: [CommentService]
})

export class CommentModule {}