import { Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { UserDetailsEntity } from "../entities/user-details.entity";

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(@InjectRepository(UserEntity) private repository: Repository<UserEntity>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async findAllUserUsingQueryBuilder() {
    const builder = this.createQueryBuilder('USERS')
      .leftJoinAndSelect('USERS.USER_DETAILS','USER_DETAILS')
      .leftJoinAndSelect('USERS.BLOGS', 'BLOGS')
    return await builder.getMany();
  }

  async findSingleUserUsingQueryBuilder(id: number) {
    const builder = this.createQueryBuilder('USERS')
      .leftJoinAndSelect('USERS.USER_DETAILS','USER_DETAILS')
      .leftJoinAndSelect('USERS.BLOGS', 'BLOGS')
      .andWhere('USERS.ID = :id', { id })
    return await builder.getOne();
  }

  async findFilteredUserUsingQueryBuilder(filterData): Promise<UserEntity[]> {
    const { full_name} = filterData
    const builder = this.createQueryBuilder('USERS')
      .andWhere('USERS.FULL_NAME LIKE :full_name', {full_name: `%${full_name}%`})
    return await builder.getMany();
  }
}