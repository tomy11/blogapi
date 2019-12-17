import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../Irepository/IuserRepository';
import { UserDto } from '../../dto/user.dto';
import { User } from '../../entity/user.entity';
import { EntityRepository } from 'typeorm';
import { Logger, InternalServerErrorException } from '@nestjs/common';


@EntityRepository(User)
export class UserRepository implements IUserRepository {

    private logger = new Logger('UserRepository');

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
