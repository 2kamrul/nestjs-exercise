import { Logger, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../../database/entities/user.entity";
import { UserDetailsEntity } from "../../database/entities/user-details.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserDetailsEntity])
  ],
  controllers: [UserController],
  providers: [UserService],
  /**
   * @hint For accessing one service into another service
   * Ex : Here meeting service need user service
   * For that need to export *service, but we have to import whole *module
   * Here exported UserService but in MeetingModule we imported UserModule
   */
  exports: [UserService]
})
export class UserModule { }
