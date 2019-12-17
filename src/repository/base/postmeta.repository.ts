import { Injectable } from '@nestjs/common';
import { IPostmetaRepository } from '../Irepository/IpostmetaRepository';
import { PostMeta } from "src/entity/postmeta.entity";
import { PostMetaDto } from 'src/dto/postmeta.dto';

@Injectable()
export class PostmetaRepository implements IPostmetaRepository {
    public async getAll(): Promise<PostMetaDto> {
        throw new Error("Method not implemented.");
    }  

    public async getById(id: number): Promise<PostMetaDto> {
        throw new Error("Method not implemented.");
    }

    public async create(meta: PostMetaDto): Promise<PostMetaDto> {
        throw new Error("Method not implemented.");
    }

    public async update(meta: PostMetaDto, id: number): Promise<PostMetaDto> {
        throw new Error("Method not implemented.");
    }

    public async delete(id: number): Promise<PostMetaDto> {
        throw new Error("Method not implemented.");
    }

}
