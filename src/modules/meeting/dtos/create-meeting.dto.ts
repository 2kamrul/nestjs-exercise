import { IsNotEmpty } from "class-validator";
import { UserEntity } from "src/database/entities/user.entity";
import { MeetingEntity } from "src/database/entities/meeting.entity";
import { isNumberObject } from "util/types";

export class CreateMeetingDto {
    id: number

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    employee: UserEntity;
}