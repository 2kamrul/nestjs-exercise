import { Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";

export class UserRepository extends Repository<UserEntity> {
  constructor(@InjectRepository(UserEntity) private repository: Repository<UserEntity>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async findAllUser() {
    const result = this.createQueryBuilder('user')
      .select('user')
  }
}