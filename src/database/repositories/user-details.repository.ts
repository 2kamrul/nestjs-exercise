import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserDetailsEntity } from "../entities/user-details.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class UserDetailsRepository extends Repository<UserDetailsEntity>{
  constructor(@InjectRepository(UserDetailsEntity) private repository: Repository<UserDetailsEntity>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}