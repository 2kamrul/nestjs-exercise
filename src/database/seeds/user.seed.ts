import { Factory, Seeder } from "typeorm-seeding";
import AppDataSource from "../../config/datasource";
import { UserEntity } from "../entities/user.entity";

export class UserSeed implements Seeder {
  async run(factory: Factory): Promise<any> {
    let data: any[] = [
      {
        ID: 1,
        USERNAME: 'kamrul-1',
        FULL_NAME: 'kamrul islam 1'
      },
      {
        ID: 2,
        USERNAME: 'kamrul-2',
        FULL_NAME: 'kamrul islam 2'
      },
      {
        ID: 3,
        USERNAME: 'kamrul-3',
        FULL_NAME: 'kamrul islam 3'
      },
      {
        ID: 4,
        USERNAME: 'kamrul-4',
        FULL_NAME: 'kamrul islam 4'
      }
    ]

    // await AppDataSource.getRepository(UserEntity).query("SET FOREIGN_KEY_CHECKS=0");

    await AppDataSource.getRepository(UserEntity).clear();  //truncate table first

    await AppDataSource
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values(data)
      .execute();

    // await AppDataSource.getRepository(UserEntity).query("SET FOREIGN_KEY_CHECKS=1");
  }
}