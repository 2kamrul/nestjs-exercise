import { DataSource } from "typeorm";
import oracleDbConfig from "./database.config";

const AppDataSource = new DataSource(oracleDbConfig)

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });


export default AppDataSource;
