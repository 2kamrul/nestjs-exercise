import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../../database/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDetailsDto } from "./dtos/create-user-details.dto";
import { UserDetailsEntity } from "../../database/entities/user-details.entity";

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
              @InjectRepository(UserDetailsEntity) private userDetailsRepository: Repository<UserDetailsEntity>) { }

  createUser(userEntity: UserEntity) {
    const newEmployee = this.userRepository.create(userEntity)
    return this.userRepository.save(newEmployee)
  }

  findSingleUser(id: number) {
    return this.userRepository.findOneBy({
      id: id
    })
  }

  async findAllUser(): Promise<CreateUserDto[]> {
    return await this.userRepository.find({
      relations: {
        userDetails: true,
        blogs: true,
      }
    })
  }

  async findAllDetailOfUser(){
    return await this.userDetailsRepository.find({
      relations: {
        user: true,
      },
    })
  }
}
