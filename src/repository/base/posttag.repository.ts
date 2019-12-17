import { Injectable } from '@nestjs/common';
import { PostTagDto } from '../../dto/posttag.dto';
import { IPosttagRepository } from '../Irepository/IposttagRepository';

@Injectable()
export class PosttagRepository implements IPosttagRepository{
    getAll(): Promise<PostTagDto> {
        throw new Error("Method not implemented.");
    }    
    getById(id: number): Promise<PostTagDto> {
        throw new Error("Method not implemented.");
    }
    create(posttag: PostTagDto): Promise<PostTagDto> {
        throw new Error("Method not implemented.");
    }
    update(posttag: PostTagDto, id: number): Promise<PostTagDto> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<PostTagDto> {
        throw new Error("Method not implemented.");
    }

    
}
