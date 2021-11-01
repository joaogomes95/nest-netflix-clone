import { Controller, Body, Post, Get, Param, UnprocessableEntityException } from '@nestjs/common';
import { User } from '@prisma/client'
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserRole } from './enum/role.enum';


@Controller()
export class UsersController {
    constructor(private service: UsersService){}

    @Get('find/:id')
    findOne(@Param('id') id: string): Promise<User>{
        return this.service.findOne(id);
    }

    @Post('create')
    createUser(@Body() data: CreateUserDto): Promise<User> { 
        delete data.passwordConfirmation;
        return this.service.create(data, UserRole.USER);
    }

    @Post('create-admin')
    createAdmin(@Body() data: CreateUserDto): Promise<User> { 
        delete data.passwordConfirmation;
        return this.service.create(data, UserRole.ADMIN);
    }
}

