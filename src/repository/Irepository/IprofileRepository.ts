import { ProfileDto } from "../../dto/profile.dto";

export interface IProfileRepository {

    getAll() : Promise<ProfileDto>;

    getById(id: number) : Promise<ProfileDto>;
 
    create(profile: ProfileDto) : Promise<ProfileDto>;

    update(profile: ProfileDto, id: number) : Promise<ProfileDto>;

    delete(id: number) : Promise<ProfileDto>;
    
}