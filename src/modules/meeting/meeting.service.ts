import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/database/entities/user.entity";
import { MeetingEntity } from "src/database/entities/meeting.entity";
import { Repository } from "typeorm";
import { UserService } from "../user/user.service";
import { CreateMeetingDto } from "./dtos/create-meeting.dto";

@Injectable()
export class MeetingService {
    constructor(
        @InjectRepository(MeetingEntity) private meetingRepository: Repository<MeetingEntity>,
        // @InjectRepository(UserService) private employeeService: Repository<UserService>
    ) { }

    @Inject()
    userService: UserService

    test(id: number) {
        return this.userService.findSingleUser(id)
    }

    createMeeting(employeeId: number, meetingDetails: CreateMeetingDto): CreateMeetingDto {
        const employee = this.userService.findSingleUser(employeeId)
        return this.meetingRepository.create(meetingDetails)
    }
}