import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, Query, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { UserEntity } from "../../database/entities/user.entity";
import { CreateUserDetailsDto } from "./dtos/create-user-details.dto";
import { FilterUserDto } from "./dtos/filter-user.dto";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
        return await this.userService.createUser(createUserDto)
    }

    @Get('/getSingleUser/:id')
    async getSingleUser(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
        return await this.userService.findSingleUser(id)
    }

    @Get('/getSingleUserUsingQueryBuilder/:id')
    async getSingleUserUsingQueryBuilder(@Param('id', ParseIntPipe) id: number): Promise<CreateUserDto> {
        return await this.userService.findSingleUserUsingQueryBuilder(id)
    }

    @Get('/getAllUser')
    async getAllUser(): Promise<CreateUserDto[]> {
        return this.userService.findAllUser()
    }

    @Get('/getAllUserUsingQueryBuilder')
    async getAllUserUsingQueryBuilder(): Promise<CreateUserDto[]> {
        return await this.userService.findAllUserUsingQueryBuilder()
    }

    @Get('/getFilteredUserUsingQueryBuilder')
    async getFilteredUserUsingQueryBuilder(@Query(ValidationPipe) filterUserDto: FilterUserDto){
        return await this.userService.findFilteredUserUsingQueryBuilder(filterUserDto)
    }

    // USER DETAILS CONTROLLERS
    @Get('/details/list')
    async getAllDetailOfUser(){
        return await this.userService.findAllDetailOfUser()
    }
}
