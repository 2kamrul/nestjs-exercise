import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeEntity } from "src/database/entities/employee.entity";
import { MeetingEntity } from "src/database/entities/meeting.entity";
import { EmployeeModule } from "../employee/employee.module";
import { EmployeeService } from "../employee/employee.service";
import { MeetingController } from "./meeting.controller";
import { MeetingService } from "./meeting.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([MeetingEntity]),
        // EmployeeService
        EmployeeModule
    ],
    controllers: [MeetingController],
    providers: [MeetingService],
})
export class MeetingModule { }