import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1721704112299 implements MigrationInterface {
    name = 'Initial1721704112299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`agents\` (\`agent_code\` char(6) NOT NULL, \`agent_name\` char(40) NULL, \`working_area\` char(35) NULL, \`commission\` decimal(10,2) NULL, \`phone_no\` char(15) NULL, \`country\` varchar(25) NULL, PRIMARY KEY (\`agent_code\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`customers\` (\`cust_code\` char(6) NOT NULL, \`cust_name\` char(40) NOT NULL, \`cust_city\` varchar(35) NULL, \`working_area\` varchar(35) NOT NULL, \`cust_country\` varchar(20) NOT NULL, \`grade\` int(11) NULL, \`opening_amt\` decimal(12,2) NOT NULL, \`receive_amt\` decimal(12,2) NOT NULL, \`payment_amt\` decimal(12,2) NOT NULL, \`outstanding_amt\` decimal(12,2) NOT NULL, \`phone_no\` varchar(17) NOT NULL, \`agent_code\` char(6) NULL, PRIMARY KEY (\`cust_code\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` char(40) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`first_name\` char(40) NULL, \`last_name\` char(40) NULL, \`email\` char(40) NULL, \`password\` char(80) NOT NULL, \`created_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`role_id\` bigint NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`orders\` (\`ord_num\` decimal(6,0) NOT NULL, \`ord_amount\` decimal(12,2) NOT NULL, \`advance_amount\` decimal(12,2) NOT NULL, \`ord_date\` date NOT NULL, \`ord_description\` varchar(60) NOT NULL, \`cust_code\` char(6) NULL, \`agent_code\` char(6) NULL, PRIMARY KEY (\`ord_num\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`customers\` ADD CONSTRAINT \`FK_b647c1bd599f48a6d87947da1ea\` FOREIGN KEY (\`agent_code\`) REFERENCES \`agents\`(\`agent_code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_a2cecd1a3531c0b041e29ba46e1\` FOREIGN KEY (\`role_id\`) REFERENCES \`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_669be2d4db3d4341bad19768e85\` FOREIGN KEY (\`cust_code\`) REFERENCES \`customers\`(\`cust_code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_fcaff738bc99c1ba91891fd73d4\` FOREIGN KEY (\`agent_code\`) REFERENCES \`agents\`(\`agent_code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_fcaff738bc99c1ba91891fd73d4\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_669be2d4db3d4341bad19768e85\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_a2cecd1a3531c0b041e29ba46e1\``);
        await queryRunner.query(`ALTER TABLE \`customers\` DROP FOREIGN KEY \`FK_b647c1bd599f48a6d87947da1ea\``);
        await queryRunner.query(`DROP TABLE \`orders\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP TABLE \`customers\``);
        await queryRunner.query(`DROP TABLE \`agents\``);
    }

}
