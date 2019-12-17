import { PostDto } from "../../dto/post.dto";

export interface IPostRepository {

    getAll() : Promise<PostDto>;

    getById(id: number) : Promise<PostDto>;
 
    create(post: PostDto) : Promise<PostDto>;

    update(post: PostDto, id: number) : Promise<PostDto>;

    delete(id: number) : Promise<PostDto>;
    
}