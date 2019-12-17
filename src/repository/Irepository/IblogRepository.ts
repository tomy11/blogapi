import { BlogDto } from "../../dto/blog.dto";

export interface IBlogRepository {

    getAll() : Promise<BlogDto>;

    getById(id: number) : Promise<BlogDto>;
 
    create(blog: BlogDto) : Promise<BlogDto>;

    update(blog: BlogDto, id: number) : Promise<BlogDto>;

    delete(id: number) : Promise<BlogDto>;
    
}