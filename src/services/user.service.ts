import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { IUser } from '../interface/user.interface';

@Injectable()
export class UserService {
    public async getAllUser(): Promise<IUser> {
        throw new Error("Method not implemented.");
    }    
    
    public async getUserById(id: number): Promise<IUser> {
        throw new Error("Method not implemented.");
    }

    public async createUser(user: UserDto): Promise<UserDto> {
        throw new Error("Method not implemented.");
    }

    public async updateUser(user: UserDto, id: number): Promise<UserDto> {
        throw new Error("Method not implemented.");
    }

    public async deleteUser(id: number): Promise<UserDto> {
        throw new Error("Method not implemented.");
    } 
}