import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRoleValues1721704347913 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO roles (name) VALUES ('admin')`);
        await queryRunner.query(`INSERT INTO roles (name) VALUES ('agent')`);
        await queryRunner.query(`INSERT INTO roles (name) VALUES ('customer')`);
        await queryRunner.query(`INSERT INTO roles (name) VALUES ('guest')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM roles WHERE name = 'admin'`);
        await queryRunner.query(`DELETE FROM roles WHERE name = 'agent'`);
        await queryRunner.query(`DELETE FROM roles WHERE name = 'customer'`);
        await queryRunner.query(`DELETE FROM roles WHERE name = 'guest'`);
    }

}
