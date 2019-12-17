import { PostTagDto } from "src/dto/posttag.dto";

export interface IPosttagRepository {

    getAll() : Promise<PostTagDto>;

    getById(id: number) : Promise<PostTagDto>;
 
    create(posttag: PostTagDto) : Promise<PostTagDto>;

    update(posttag: PostTagDto, id: number) : Promise<PostTagDto>;

    delete(id: number) : Promise<PostTagDto>;
    
}
