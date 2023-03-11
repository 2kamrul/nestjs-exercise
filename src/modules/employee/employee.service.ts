import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dtos/create-employee.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { EmployeeEntity } from "../../database/entities/employee.entity";
import { Repository } from "typeorm";

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(EmployeeEntity) private employeeRepository: Repository<EmployeeEntity>) { }
  private readonly employees: CreateEmployeeDto[] = [];

  createEmployee(employeeEntity: EmployeeEntity) {
    const newEmployee = this.employeeRepository.create(employeeEntity)
    return this.employeeRepository.save(newEmployee)
  }

  getSingleEmployee(id: number) {
    return this.employeeRepository.findOneBy({
      id: id
    })
  }

  async getAll(): Promise<CreateEmployeeDto[]> {
    return await this.employeeRepository.find()
  }
}
