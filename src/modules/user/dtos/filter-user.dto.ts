import { IsOptional } from "class-validator";

export class FilterUserDto {
  @IsOptional()
  full_name: string;
}