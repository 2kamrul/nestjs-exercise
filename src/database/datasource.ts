import { DataSource } from "typeorm";
import mySqlDataSource from "./database.config";

const AppDataSource = new DataSource(mySqlDataSource)

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });


export default AppDataSource;
