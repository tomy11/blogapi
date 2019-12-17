import { Injectable } from '@nestjs/common';
import { PostDto } from '../../dto/post.dto';
import { IPostRepository } from '../Irepository/IpostRepository';

@Injectable()
export class PostRepository implements IPostRepository{
    getAll(): Promise<PostDto> {
        throw new Error("Method not implemented.");
    }    
    getById(id: number): Promise<PostDto> {
        throw new Error("Method not implemented.");
    }
    create(post: PostDto): Promise<PostDto> {
        throw new Error("Method not implemented.");
    }
    update(post: PostDto, id: number): Promise<PostDto> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<PostDto> {
        throw new Error("Method not implemented.");
    }

}
