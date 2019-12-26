import { UserDto } from "../../dto/user.dto";

export interface IUserRepository {

    getAllUser() : Promise<UserDto>;

    getUserById(id: number) : Promise<UserDto>;
 
    createUser(user: UserDto) : Promise<UserDto>;

    updateUser(user: UserDto, id: number) : Promise<UserDto>;

    deleteUser(id: number) : Promise<UserDto>;
    
}