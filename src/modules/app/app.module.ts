import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "../user/user.module";
import { UserController } from "../user/user.controller";
import { UserService } from "../user/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import oracleDbConfig from "../../config/database.config";
import { BlogService } from "../blog/blog.service";
import { BlogModule } from "../blog/blog.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(oracleDbConfig),

    UserModule,
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
