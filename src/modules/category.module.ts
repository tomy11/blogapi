import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { categoryProvider } from '../providers/category.provider';
import { CategoryService } from '../services/category.service';
import { CategoryController } from '../controllers/category.controller';

@Module({
    imports: [DatabaseModule],
    providers: [...categoryProvider, CategoryService],
    controllers: [CategoryController],
    exports: [CategoryService]
})

export class CategoryModule {}