import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { imageProvider } from '../providers/image.provider';
import { ImageService } from '../services/image.service';
import { ImageController } from '../controllers/image.controller';

@Module({
    imports: [DatabaseModule],
    providers: [...imageProvider, ImageService],
    controllers: [ImageController],
    exports: [ImageService]
})

export class ImageModule {}