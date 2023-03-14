import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTestMigrationTable1678774460606 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              name: "TEST_MIGRATION",
              columns: [
                  {
                      name: 'ID',
                      type: 'int',
                      isPrimary: true,
                      isGenerated: true,
                      generatedIdentity: 'BY DEFAULT',
                      generationStrategy: 'increment'
                  },
                  {
                      name: "TEST_NAME",
                      type: "varchar",
                      default: "''",
                      length: "50"
                  }
              ]
          })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("TEST_MIGRATION", true, true, true);
    }

}
