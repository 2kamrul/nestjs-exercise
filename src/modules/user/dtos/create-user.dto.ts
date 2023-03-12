import { IsNotEmpty } from "class-validator";
import { isNumberObject } from "util/types";
import { UserDetailsEntity } from "../../../database/entities/user-details.entity";
import { BlogEntity } from "../../../database/entities/blog.entity";

export class CreateUserDto {
    id: number

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    full_name: string;

    userDetails: UserDetailsEntity

    blogs: BlogEntity
}