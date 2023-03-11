import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "../user/user.module";
import { UserController } from "../user/user.controller";
import { UserService } from "../user/user.service";
import { EmployeeModule } from "../employee/employee.module";
import { EmployeeController } from "../employee/employee.controller";
import { EmployeeService } from "../employee/employee.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import mySqlDataSource from "../../database/database.config";
import { MeetingModule } from "../meeting/meeting.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(mySqlDataSource),

    UserModule,
    EmployeeModule,
    MeetingModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
