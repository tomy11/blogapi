import { Injectable } from '@nestjs/common';
import { ITagRepository } from '../Irepository/ItagRepository';
import { TagDto } from '../../dto/tag.dto';

@Injectable()
export class TagRepository implements ITagRepository{
    public async getAll(): Promise<TagDto> {
        throw new Error("Method not implemented.");
    }    
    public async getById(id: number): Promise<TagDto> {
        throw new Error("Method not implemented.");
    }
    public async create(tag: TagDto): Promise<TagDto> {
        throw new Error("Method not implemented.");
    }
    public async update(tag: TagDto, id: number): Promise<TagDto> {
        throw new Error("Method not implemented.");
    }
    public async delete(id: number): Promise<TagDto> {
        throw new Error("Method not implemented.");
    }
    
}
