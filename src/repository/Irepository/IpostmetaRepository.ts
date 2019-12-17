import { PostMetaDto } from "../../dto/postmeta.dto";

export interface IPostmetaRepository {

    getAll() : Promise<PostMetaDto>;

    getById(id: number) : Promise<PostMetaDto>;
 
    create(meta: PostMetaDto) : Promise<PostMetaDto>;

    update(meta: PostMetaDto, id: number) : Promise<PostMetaDto>;

    delete(id: number) : Promise<PostMetaDto>;
    
}
