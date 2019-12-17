import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../Irepository/IuserRepository';
import { UserDto } from 'src/dto/user.dto';

@Injectable()
export class UserRepository implements IUserRepository {
    public async getAll(): Promise<UserDto> {
        throw new Error("Method not implemented.");
    }    
    
    public async getById(id: number): Promise<UserDto> {
        throw new Error("Method not implemented.");
    }

    public async create(user: UserDto): Promise<UserDto> {
        throw new Error("Method not implemented.");
    }

    public async update(user: UserDto, id: number): Promise<UserDto> {
        throw new Error("Method not implemented.");
    }

    public async delete(id: number): Promise<UserDto> {
        throw new Error("Method not implemented.");
    } 
    
}
