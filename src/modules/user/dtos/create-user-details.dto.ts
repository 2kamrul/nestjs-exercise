import { IsNotEmpty } from "class-validator";
import { isNumberObject } from "util/types";
import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../../../database/entities/user.entity";

export class CreateUserDetailsDto {
    id: number;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    phone: string;

    user: UserEntity
}