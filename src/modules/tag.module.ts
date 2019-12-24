import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { tagProvider } from '../providers/tag.provider';
import { TagService } from '../services/tag.service';
import { TagController } from '../controllers/tag.controller';

@Module({
    imports: [DatabaseModule],
    providers: [...tagProvider, TagService],
    controllers: [TagController],
    exports: [TagService]
})

export class TagModule {}