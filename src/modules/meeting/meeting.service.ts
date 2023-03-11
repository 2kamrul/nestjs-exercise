import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EmployeeEntity } from "src/database/entities/employee.entity";
import { MeetingEntity } from "src/database/entities/meeting.entity";
import { Repository } from "typeorm";
import { EmployeeService } from "../employee/employee.service";
import { CreateMeetingDto } from "./dtos/create-meeting.dto";

@Injectable()
export class MeetingService {
    constructor(
        @InjectRepository(MeetingEntity) private meetingRepository: Repository<MeetingEntity>,
        // @InjectRepository(EmployeeService) private employeeService: Repository<EmployeeService>
    ) { }

    @Inject()
    employeeService: EmployeeService

    test(id: number) {
        return this.employeeService.getSingleEmployee(id)
    }

    createMeeting(employeeId: number, meetingDetails: CreateMeetingDto): CreateMeetingDto {
        const employee = this.employeeService.getSingleEmployee(employeeId)
        return this.meetingRepository.create(meetingDetails)
    }
}