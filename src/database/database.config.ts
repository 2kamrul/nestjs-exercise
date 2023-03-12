import { DataSource, DataSourceOptions } from "typeorm";
const mySqlDataSource: DataSourceOptions = {
    type: 'oracle',
    host: 'localhost',
    sid: 'orcl',
    port: 1521,
    username: 'root',
    password: '123456',
    database: 'nestjs-exercise',
    entities: [
        __dirname + '/entities/*{.ts,.js}'
    ],
    synchronize: true,
    logging: false,
}

export default mySqlDataSource