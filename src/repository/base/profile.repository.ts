import { Injectable } from '@nestjs/common';
import { IProfileRepository } from '../Irepository/IprofileRepository';
import { ProfileDto } from '../../dto/profile.dto';

@Injectable()
export class ProfileRepository implements IProfileRepository{
    getAll(): Promise<ProfileDto> {
        throw new Error("Method not implemented.");
    }    
    getById(id: number): Promise<ProfileDto> {
        throw new Error("Method not implemented.");
    }
    create(profile: ProfileDto): Promise<ProfileDto> {
        throw new Error("Method not implemented.");
    }
    update(profile: ProfileDto, id: number): Promise<ProfileDto> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<ProfileDto> {
        throw new Error("Method not implemented.");
    }

    
}
