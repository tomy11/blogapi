import { Injectable } from '@nestjs/common';
import { ImageDto } from '../../dto/image.dto';
import { IimageRepository } from '../Irepository/IimageRepository';

@Injectable()
export class ImageRepository implements IimageRepository{
    getAll(): Promise<ImageDto> {
        throw new Error("Method not implemented.");
    }    
    getById(id: number): Promise<ImageDto> {
        throw new Error("Method not implemented.");
    }
    create(image: ImageDto): Promise<ImageDto> {
        throw new Error("Method not implemented.");
    }
    update(image: ImageDto, id: number): Promise<ImageDto> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<ImageDto> {
        throw new Error("Method not implemented.");
    }

    
}
