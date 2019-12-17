import { Injectable } from '@nestjs/common';
import { CategoryDto } from '../../dto/category.dto';
import { ICategoryRepository } from '../Irepository/IcategoryRepository';

@Injectable()
export class CategoryRepository implements ICategoryRepository{
    getAll(): Promise<CategoryDto> {
        throw new Error("Method not implemented.");
    }    
    getById(id: number): Promise<CategoryDto> {
        throw new Error("Method not implemented.");
    }
    create(category: CategoryDto): Promise<CategoryDto> {
        throw new Error("Method not implemented.");
    }
    update(category: CategoryDto, id: number): Promise<CategoryDto> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<CategoryDto> {
        throw new Error("Method not implemented.");
    }

    
}
