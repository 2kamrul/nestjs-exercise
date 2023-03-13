import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../../database/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDetailsDto } from "./dtos/create-user-details.dto";
import { UserDetailsEntity } from "../../database/entities/user-details.entity";
import { UserRepository } from "../../database/repositories/user.repository";
import { UserDetailsRepository } from "../../database/repositories/user-details.repository";

@Injectable()
export class UserService {
  @Inject()
  private userRepository: UserRepository;
  @Inject()
  private userDetailsRepository: UserDetailsRepository;

  createUser(userEntity: UserEntity) {
    const newEmployee = this.userRepository.create(userEntity)
    return this.userRepository.save(newEmployee)
  }

  async findSingleUser(id: number): Promise<UserEntity> {
    return await this.userRepository.findOne({
      where: {
        ID: id
      },
      relations: {
        USER_DETAILS: true,
        BLOGS: true
      }
    })
  }

  async findSingleUserUsingQueryBuilder(id: number): Promise<UserEntity>{
    return await this.userRepository.findSingleUserUsingQueryBuilder(id)
  }

  async findAllUser(): Promise<UserEntity[]> {
    return await this.userRepository.find({
      relations: {
        USER_DETAILS: true,
        BLOGS: true,
      }
    })
  }

  async findAllUserUsingQueryBuilder(): Promise<UserEntity[]> {
    return await this.userRepository.findAllUserUsingQueryBuilder()
  }

  async findFilteredUserUsingQueryBuilder(filterData): Promise<UserEntity[]>{
    return await this.userRepository.findFilteredUserUsingQueryBuilder(filterData)
  }

  async findAllDetailOfUser(){
    return await this.userDetailsRepository.find({
      relations: {
        USER: true,
      },
    })
  }
}
