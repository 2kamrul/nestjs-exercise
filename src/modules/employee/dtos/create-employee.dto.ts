import { IsNotEmpty } from "class-validator";
import { isNumberObject } from "util/types";

export class CreateEmployeeDto {
    id: number

    @IsNotEmpty()
    username: string;
    
    @IsNotEmpty()
    full_name: string;
}