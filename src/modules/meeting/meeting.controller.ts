import { Body, Controller, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Get } from "@nestjs/common/decorators";
import { MeetingEntity } from "src/database/entities/meeting.entity";
import { UserService } from "../user/user.service";
import { CreateMeetingDto } from "./dtos/create-meeting.dto";
import { MeetingService } from "./meeting.service";


@Controller('meeting')
export class MeetingController {
    constructor(private meetingService: MeetingService) { }

    @Get('/:id')
    async test(@Param() id: number) {
        return await this.meetingService.test(id)
    }

    @Post('/:employeeId/create')
    async create(@Body() createMeetingDto: CreateMeetingDto, @Param() emplyeeId: number): Promise<MeetingEntity> {
        return this.meetingService.createMeeting(emplyeeId, createMeetingDto)
    }
}