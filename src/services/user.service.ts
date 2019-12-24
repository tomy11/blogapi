import { Injectable, Inject } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { IUser } from '../interface/user.interface';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        //@InjectRepository(User)
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<User>,
    ) { }

    public async getAllUser(): Promise<IUser[]> {
        return await this.userRepository.find();
    }

    public async getUserById(id: number): Promise<IUser> {
        return await this.userRepository.findOneOrFail(id);
    }

    public async createUser(user: UserDto): Promise<UserDto> {
        const users = new User();
        users.userName = user.userName,
        users.passWord = users.passWord
        const resdata = await this.userRepository.save(users);
        return resdata;
    }

    public async updateUser(user: UserDto, id: number): Promise<UserDto> {
        const users = await this.userRepository.findOne(id);
        users.userName = user.userName,
        users.passWord = users.passWord
        const resdata = await this.userRepository.save(users);
        return resdata;
    }

    public async deleteUser(id: number): Promise<any> {
        await this.userRepository.delete(id);
    }
}