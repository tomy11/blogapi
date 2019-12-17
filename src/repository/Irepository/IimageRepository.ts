import { ImageDto } from "../../dto/image.dto";

export interface IimageRepository {

    getAll() : Promise<ImageDto>;

    getById(id: number) : Promise<ImageDto>;
 
    create(image: ImageDto) : Promise<ImageDto>;

    update(image: ImageDto, id: number) : Promise<ImageDto>;

    delete(id: number) : Promise<ImageDto>;
    
}