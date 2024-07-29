import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOrdersData1722204382185 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO orders VALUES('200100', '1000.00', '600.00', '2008-08-01', 'SOD', 'C00013', 'A003')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200110', '3000.00', '500.00', '2008-04-15', 'SOD', 'C00019', 'A010')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200107', '4500.00', '900.00', '2008-08-30', 'SOD', 'C00007', 'A010')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200112', '2000.00', '400.00', '2008-05-30', 'SOD', 'C00016', 'A007')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200113', '4000.00', '600.00', '2008-06-10', 'SOD', 'C00022', 'A002')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200102', '2000.00', '300.00', '2008-05-25', 'SOD', 'C00012', 'A012')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200114', '3500.00', '2000.00', '2008-08-15', 'SOD', 'C00002', 'A008')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200122', '2500.00', '400.00', '2008-09-16', 'SOD', 'C00003', 'A004')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200118', '500.00', '100.00', '2008-07-20', 'SOD', 'C00023', 'A006')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200119', '4000.00', '700.00', '2008-09-16', 'SOD', 'C00007', 'A010')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200121', '1500.00', '600.00', '2008-09-23', 'SOD', 'C00008', 'A004')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200130', '2500.00', '400.00', '2008-07-30', 'SOD', 'C00025', 'A011')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200134', '4200.00', '1800.00', '2008-09-25', 'SOD', 'C00004', 'A005')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200108', '4000.00', '600.00', '2008-02-15', 'SOD', 'C00008', 'A004')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200103', '1500.00', '700.00', '2008-05-15', 'SOD', 'C00021', 'A005')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200105', '2500.00', '500.00', '2008-07-18', 'SOD', 'C00025', 'A011')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200109', '3500.00', '800.00', '2008-07-30', 'SOD', 'C00011', 'A010')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200101', '3000.00', '1000.00', '2008-07-15', 'SOD', 'C00001', 'A008')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200111', '1000.00', '300.00', '2008-07-10', 'SOD', 'C00020', 'A008')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200104', '1500.00', '500.00', '2008-03-13', 'SOD', 'C00006', 'A004')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200106', '2500.00', '700.00', '2008-04-20', 'SOD', 'C00005', 'A002')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200125', '2000.00', '600.00', '2008-10-10', 'SOD', 'C00018', 'A005')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200117', '800.00', '200.00', '2008-10-20', 'SOD', 'C00014', 'A001')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200123', '500.00', '100.00', '2008-09-16', 'SOD', 'C00022', 'A002')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200120', '500.00', '100.00', '2008-07-20', 'SOD', 'C00009', 'A002')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200116', '500.00', '100.00', '2008-07-13', 'SOD', 'C00010', 'A009')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200124', '500.00', '100.00', '2008-06-20', 'SOD', 'C00017', 'A007')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200126', '500.00', '100.00', '2008-06-24', 'SOD', 'C00022', 'A002')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200129', '2500.00', '500.00', '2008-07-20', 'SOD', 'C00024', 'A006')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200127', '2500.00', '400.00', '2008-07-20', 'SOD', 'C00015', 'A003')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200128', '3500.00', '1500.00', '2008-07-20', 'SOD', 'C00009', 'A002')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200135', '2000.00', '800.00', '2008-09-16', 'SOD', 'C00007', 'A010')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200131', '900.00', '150.00', '2008-08-26', 'SOD', 'C00012', 'A012')`);
        await queryRunner.query(`INSERT INTO orders VALUES('200133', '1200.00', '400.00', '2008-06-29', 'SOD', 'C00009', 'A002')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // delete order data
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200100'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200110'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200107'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200112'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200113'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200102'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200114'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200122'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200118'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200119'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200121'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200130'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200134'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200108'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200103'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200105'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200109'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200101'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200111'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200104'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200106'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200125'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200117'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200123'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200120'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200116'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200124'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200126'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200129'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200127'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200128'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200135'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200131'`);
        await queryRunner.query(`DELETE FROM orders WHERE ord_num = '200133'`);
    }

}
