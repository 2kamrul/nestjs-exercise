import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/database/entities/user.entity";
import { MeetingEntity } from "src/database/entities/meeting.entity";
import { UserModule } from "../user/user.module";
import { UserService } from "../user/user.service";
import { MeetingController } from "./meeting.controller";
import { MeetingService } from "./meeting.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([MeetingEntity]),
        // UserService
        UserModule
    ],
    controllers: [MeetingController],
    providers: [MeetingService],
})
export class MeetingModule { }