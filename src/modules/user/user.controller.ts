import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { UserEntity } from "../../database/entities/user.entity";
import { CreateUserDetailsDto } from "./dtos/create-user-details.dto";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
        return await this.userService.createUser(createUserDto)
    }

    @Get('/:id')
    async getSingleUser(@Param() id: number): Promise<CreateUserDto> {
        return await this.userService.findSingleUser(id)
    }

    @Get()
    async getAllUser(): Promise<CreateUserDto[]> {
        return this.userService.findAllUser()
    }

    @Get('/details/list')
    async getAllDetailOfUser(){
        return await this.userService.findAllDetailOfUser()
    }

}
