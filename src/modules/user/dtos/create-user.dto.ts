import { IsNotEmpty } from "class-validator";
import { isNumberObject } from "util/types";
import { UserDetailsEntity } from "../../../database/entities/user-details.entity";
import { BlogEntity } from "../../../database/entities/blog.entity";

export class CreateUserDto {
    ID: number

    @IsNotEmpty()
    USERNAME: string;

    @IsNotEmpty()
    FULL_NAME: string;

    USER_DETAILS: UserDetailsEntity

    BLOGS: BlogEntity
}