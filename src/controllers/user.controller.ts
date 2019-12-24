import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { IUser } from '../interface/user.interface';
import { UserDto } from '../dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async findAll(): Promise<IUser[]> {
        const resdata = await this.userService.getAllUser();
        const useDataRes: any = { 
            resData: resdata, 
            count: resdata.length 
        }
        return useDataRes;
    }
    @Get(':id')
    findById(@Param() params): Promise<IUser> {
        return this.userService.getUserById(params.id);
    }
    @Post()
    save(@Body() user: UserDto) {
        let data = this.userService.createUser(user);
        return { message: 'create data success', data: data };
    }

    @Patch(':id')
    update(@Body() user: UserDto, id: number) {

        let data = this.userService.updateUser(user, id);
        return data;
    }

    @Delete(':id')
    delete(@Param() params) {
        let result = this.userService.deleteUser(params.id);
    }
}