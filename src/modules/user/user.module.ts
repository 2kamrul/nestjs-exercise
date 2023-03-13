import { Logger, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../../database/entities/user.entity";
import { UserDetailsEntity } from "../../database/entities/user-details.entity";
import { UserRepository } from "../../database/repositories/user.repository";
import { UserDetailsRepository } from "../../database/repositories/user-details.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserDetailsEntity])
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, UserDetailsRepository],
  /**
   * @hint For accessing one service into another service
   * Ex : Here meeting service need user service
   * For that need to export *service, but we have to import whole *module
   * Here exported UserService but in MeetingModule we imported UserModule
   */
  exports: [UserService]
})
export class UserModule { }
