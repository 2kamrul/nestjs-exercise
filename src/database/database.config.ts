import { DataSource, DataSourceOptions } from "typeorm";
const mySqlDataSource: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nestjs-exercise',
    entities: [
        __dirname + '/entities/*{.ts,.js}'
    ],
    synchronize: true,
}

export default mySqlDataSource