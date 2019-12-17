import { Injectable } from '@nestjs/common';
import { ITagRepository } from '../Irepository/ItagRepository';
import { TagDto } from '../../dto/tag.dto';
import { Tag } from '../../entity/tag.entity';
import { EntityRepository } from 'typeorm';
import { Logger, InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Tag)
export class TagRepository implements ITagRepository{
    
    private logger = new Logger('TagRepository');

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
