import { Injectable } from '@nestjs/common';
import { BlogDto } from '../../dto/blog.dto'
import { IBlogRepository } from '../Irepository/Iblogrepository';

@Injectable()
export class BlogRepository implements IBlogRepository {
    getAll(): Promise<BlogDto> {
        throw new Error("Method not implemented.");
    }    
    getById(id: number): Promise<BlogDto> {
        throw new Error("Method not implemented.");
    }
    create(blog: BlogDto): Promise<BlogDto> {
        throw new Error("Method not implemented.");
    }
    update(blog: BlogDto, id: number): Promise<BlogDto> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<BlogDto> {
        throw new Error("Method not implemented.");
    }
    
}
