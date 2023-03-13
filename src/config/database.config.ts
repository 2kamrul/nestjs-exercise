import { DataSource, DataSourceOptions } from "typeorm";
import { UserSeed } from "../database/seeds/user.seed";
import { OracleConnectionOptions } from "typeorm/driver/oracle/OracleConnectionOptions";
const path = require('path');

const sourcePath = path.join(__dirname, '../');

const oracleDbConfig: OracleConnectionOptions = {
    type: 'oracle',
    host: 'localhost',
    sid: 'orcl',
    port: 1521,
    username: 'root',
    password: '123456',
    database: 'nestjs-exercise',
    entities: [
        sourcePath + 'database/entities/*{.ts,.js}'
    ],
    extra: {
        seeds: [
          sourcePath + 'database/seeds/**/*{.ts,.js}'
        ],
        // seeds: [UserSeed],
    },
    synchronize: true,
    logging: false,
}

export default oracleDbConfig