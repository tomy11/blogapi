import { TagDto } from "../../dto/tag.dto";

export interface ITagRepository {

    getAll() : Promise<TagDto>;

    getById(id: number) : Promise<TagDto>;
 
    create(tag: TagDto) : Promise<TagDto>;

    update(tag: TagDto, id: number) : Promise<TagDto>;

    delete(id: number) : Promise<TagDto>;
    
}