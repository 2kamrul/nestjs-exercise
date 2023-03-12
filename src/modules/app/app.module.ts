import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "../user/user.module";
import { UserController } from "../user/user.controller";
import { UserService } from "../user/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import mySqlDataSource from "../../database/database.config";
import { MeetingModule } from "../meeting/meeting.module";
import { BlogService } from "../blog/blog.service";
import { BlogModule } from "../blog/blog.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(mySqlDataSource),

    UserModule,
    BlogModule,
    MeetingModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
