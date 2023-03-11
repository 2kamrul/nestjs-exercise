import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateEmployeeDto } from './dtos/create-employee.dto';
import { EmployeeService } from './employee.service';
import { EmployeeEntity } from "../../database/entities/employee.entity";

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) { }

    @Post()
    async create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<EmployeeEntity> {
        return await this.employeeService.createEmployee(createEmployeeDto)
    }

    @Get('/:id')
    async getSingleEmployee(@Param() id: number): Promise<CreateEmployeeDto> {
        return await this.employeeService.getSingleEmployee(id)
    }

    @Get()
    async findAll(): Promise<CreateEmployeeDto[]> {
        return this.employeeService.getAll()
    }
}
