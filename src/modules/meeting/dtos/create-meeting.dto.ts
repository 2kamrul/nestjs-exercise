import { IsNotEmpty } from "class-validator";
import { EmployeeEntity } from "src/database/entities/employee.entity";
import { MeetingEntity } from "src/database/entities/meeting.entity";
import { isNumberObject } from "util/types";

export class CreateMeetingDto {
    id: number

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    employee: EmployeeEntity;
}