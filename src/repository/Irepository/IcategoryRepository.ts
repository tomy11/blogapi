import { CategoryDto } from "../../dto/category.dto";

export interface ICategoryRepository {

    getAll() : Promise<CategoryDto>;

    getById(id: number) : Promise<CategoryDto>;
 
    create(category: CategoryDto) : Promise<CategoryDto>;

    update(category: CategoryDto, id: number) : Promise<CategoryDto>;

    delete(id: number) : Promise<CategoryDto>;
    
}