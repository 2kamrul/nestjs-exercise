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
    exports: []
})
export class EmployeeModule {}
