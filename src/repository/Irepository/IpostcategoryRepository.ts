import { PostCategoryDto } from "../../dto/postcategory.dto";

export interface IPostCategoryRepository {

    getAll() : Promise<PostCategoryDto>;

    getById(id: number) : Promise<PostCategoryDto>;
 
    create(postcategory: PostCategoryDto) : Promise<PostCategoryDto>;

    update(postcategory: PostCategoryDto, id: number) : Promise<PostCategoryDto>;

    delete(id: number) : Promise<PostCategoryDto>;
    
}