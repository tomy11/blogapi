import { Injectable, Inject } from '@nestjs/common';
import { UserDto } from '../../dto/user.dto';
import { User } from '../../entity/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Logger, InternalServerErrorException } from '@nestjs/common';
import { IUserRepository } from '../Irepository/IuserRepository';
@EntityRepository(User)
@Injectable()
export class UserRepository extends Repository<User> implements IUserRepository {
  
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<User>) {
        super();
    }
    private logger = new Logger('UserRepository');
    public async getAllUser(): Promise<UserDto> {
        return;
    }
    public async createUser(user: UserDto): Promise<User> {
        const { userName, passWord } = user;
        try {
            const users = new User();
            users.userName = userName;
            users.passWord = passWord;
            return await this.userRepository.save(users);
        }
        catch (error) {
            this.logger.error(``);
            throw new InternalServerErrorException;
        }
    }

    public async getUserById(id: number): Promise<UserDto> {
        throw new Error("Method not implemented.");
    }
    public async updateUser(user: UserDto, id: number): Promise<UserDto> {
        throw new Error("Method not implemented.");
    }
    public async deleteUser(id: number): Promise<UserDto> {
        throw new Error("Method not implemented.");
    }
 
}
