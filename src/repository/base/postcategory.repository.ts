import { Injectable } from '@nestjs/common';
import { PostCategoryDto } from '../../dto/postcategory.dto';
import { IPostCategoryRepository } from '../Irepository/IpostcategoryRepository';

@Injectable()
export class PostCategoryRepository implements IPostCategoryRepository{
    getAll(): Promise<PostCategoryDto> {
        throw new Error("Method not implemented.");
    }    
    getById(id: number): Promise<PostCategoryDto> {
        throw new Error("Method not implemented.");
    }
    create(postcategory: PostCategoryDto): Promise<PostCategoryDto> {
        throw new Error("Method not implemented.");
    }
    update(postcategory: PostCategoryDto, id: number): Promise<PostCategoryDto> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<PostCategoryDto> {
        throw new Error("Method not implemented.");
    }

    
}
