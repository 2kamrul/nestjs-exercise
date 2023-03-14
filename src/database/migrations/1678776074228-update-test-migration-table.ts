import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class updateTestMigrationTable1678776074228 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
          "TEST_MIGRATION",
          new TableColumn( {
              name: "TEST_DESC",
              type: "varchar",
              default: "''",
              length: "250"
          })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.dropColumn(
          'TEST_MIGRATION',"TEST_DESC"
        )
    }
}
