import { Logger, Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeEntity } from "../../database/entities/employee.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeEntity])
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  /**
   * @hint For accessing one service into another service
   * Ex : Here employee service need to be used in meeting service
   * For that need to export *service but import whole *module
   * Here exported EmployeeService but in MeetingModule we imported EmployeeModule
   */
  exports: [EmployeeService]
})
export class EmployeeModule { }
