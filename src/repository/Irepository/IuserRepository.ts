import { UserDto } from "../../dto/user.dto";

export interface IUserRepository {

    getAll() : Promise<UserDto>;

    getById(id: number) : Promise<UserDto>;
 
    create(user: UserDto) : Promise<UserDto>;

    update(user: UserDto, id: number) : Promise<UserDto>;

    delete(id: number) : Promise<UserDto>;
    
}