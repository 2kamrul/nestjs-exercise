import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUserTable1678777480648 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              name: 'USERS',
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
                      name: "USERNAME",
                      type: "varchar",
                      isUnique: true,
                      length: "100"
                  },
                  {
                      name: "FULL_NAME",
                      type: "varchar",
                      length: "250"
                  }
              ]
          })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('USERS', true, true, true)
    }

}
