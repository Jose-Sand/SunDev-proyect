import { MigrationInterface, QueryRunner } from "typeorm";

export class AddInitData1722203066034 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO agents VALUES ('A007', 'Ramasundar', 'Bangalore', '0.15', '077-25814763', '')`);
        await queryRunner.query(`INSERT INTO agents VALUES ('A003', 'Alex ', 'London', '0.13', '075-12458969', '')`);
        await queryRunner.query(`INSERT INTO agents VALUES ('A008', 'Alford', 'New York', '0.12', '044-25874365', '')`);
        await queryRunner.query(`INSERT INTO agents VALUES ('A011', 'Ravi Kumar', 'Bangalore', '0.15', '077-45625874', '')`);
        await queryRunner.query(`INSERT INTO agents VALUES ('A010', 'Santakumar', 'Chennai', '0.14', '007-22388644', '')`);
        await queryRunner.query(`INSERT INTO agents VALUES ('A012', 'Lucida', 'San Jose', '0.12', '044-52981425', '')`);
        await queryRunner.query(`INSERT INTO agents VALUES ('A005', 'Anderson', 'Brisban', '0.13', '045-21447739', '')`);
        await queryRunner.query(`INSERT INTO agents VALUES ('A001', 'Subbarao', 'Bangalore', '0.14', '077-12346674', '')`);
        await queryRunner.query(`INSERT INTO agents VALUES ('A002', 'Mukesh', 'Mumbai', '0.11', '029-12358964', '')`);
        await queryRunner.query(`INSERT INTO agents VALUES ('A006', 'McDen', 'London', '0.15', '078-22255588', '')`);
        await queryRunner.query(`INSERT INTO agents VALUES ('A004', 'Ivan', 'Torento', '0.15', '008-22544166', '')`);
        await queryRunner.query(`INSERT INTO agents VALUES ('A009', 'Benjamin', 'Hampshair', '0.11', '008-22536178', '')`);


        await queryRunner.query(`INSERT INTO customers VALUES ('C00013', 'Holmes', 'London', 'London', 'UK', '2', '6000.00', '5000.00', '7000.00', '4000.00', 'BBBBBBB', 'A003')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00001', 'Micheal', 'New York', 'New York', 'USA', '2', '3000.00', '5000.00', '2000.00', '6000.00', 'CCCCCCC', 'A008')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00020', 'Albert', 'New York', 'New York', 'USA', '3', '5000.00', '7000.00', '6000.00', '6000.00', 'BBBBSBB', 'A008')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00025', 'Ravindran', 'Bangalore', 'Bangalore', 'India', '2', '5000.00', '7000.00', '4000.00', '8000.00', 'AVAVAVA', 'A011')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00024', 'Cook', 'London', 'London', 'UK', '2', '4000.00', '9000.00', '7000.00', '6000.00', 'FSDDSDF', 'A006')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00015', 'Stuart', 'London', 'London', 'UK', '1', '6000.00', '8000.00', '3000.00', '11000.00', 'GFSGERS', 'A003')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00002', 'Bolt', 'New York', 'New York', 'USA', '3', '5000.00', '7000.00', '9000.00', '3000.00', 'DDNRDRH', 'A008')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00018', 'Fleming', 'Brisban', 'Brisban', 'Australia', '2', '7000.00', '7000.00', '9000.00', '5000.00', 'NHBGVFC', 'A005')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00021', 'Jacks', 'Brisban', 'Brisban', 'Australia', '1', '7000.00', '7000.00', '7000.00', '7000.00', 'WERTGDF', 'A005')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00019', 'Yearannaidu', 'Chennai', 'Chennai', 'India', '1', '8000.00', '7000.00', '7000.00', '8000.00', 'ZZZZBFV', 'A010')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00005', 'Sasikant', 'Mumbai', 'Mumbai', 'India', '1', '7000.00', '11000.00', '7000.00', '11000.00', '147-25896312', 'A002')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00007', 'Ramanathan', 'Chennai', 'Chennai', 'India', '1', '7000.00', '11000.00', '9000.00', '9000.00', 'GHRDWSD', 'A010')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00022', 'Avinash', 'Mumbai', 'Mumbai', 'India', '2', '7000.00', '11000.00', '9000.00', '9000.00', '113-12345678','A002')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00004', 'Winston', 'Brisban', 'Brisban', 'Australia', '1', '5000.00', '8000.00', '7000.00', '6000.00', 'AAAAAAA', 'A005')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00023', 'Karl', 'London', 'London', 'UK', '0', '4000.00', '6000.00', '7000.00', '3000.00', 'AAAABAA', 'A006')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00006', 'Shilton', 'Torento', 'Torento', 'Canada', '1', '10000.00', '7000.00', '6000.00', '11000.00', 'DDDDDDD', 'A004')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00010', 'Charles', 'Hampshair', 'Hampshair', 'UK', '3', '6000.00', '4000.00', '5000.00', '5000.00', 'MMMMMMM', 'A009')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00017', 'Srinivas', 'Bangalore', 'Bangalore', 'India', '2', '8000.00', '4000.00', '3000.00', '9000.00', 'AAAAAAB', 'A007')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00012', 'Steven', 'San Jose', 'San Jose', 'USA', '1', '5000.00', '7000.00', '9000.00', '3000.00', 'KRFYGJK', 'A012')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00008', 'Karolina', 'Torento', 'Torento', 'Canada', '1', '7000.00', '7000.00', '9000.00', '5000.00', 'HJKORED', 'A004')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00003', 'Martin', 'Torento', 'Torento', 'Canada', '2', '8000.00', '7000.00', '7000.00', '8000.00', 'MJYURFD', 'A004')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00009', 'Ramesh', 'Mumbai', 'Mumbai', 'India', '3', '8000.00', '7000.00', '3000.00', '12000.00', 'Phone No', 'A002')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00014', 'Rangarappa', 'Bangalore', 'Bangalore', 'India', '2', '8000.00', '11000.00', '7000.00', '12000.00', 'AAAATGF', 'A001')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00016', 'Venkatpati', 'Bangalore', 'Bangalore', 'India', '2', '8000.00', '11000.00', '7000.00', '12000.00', 'JRTVFDD', 'A007')`);
        await queryRunner.query(`INSERT INTO customers VALUES ('C00011', 'Sundariya', 'Chennai', 'Chennai', 'India', '3', '7000.00', '11000.00', '7000.00', '11000.00', 'PPHGRTS', 'A010')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // delete customer data 
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00013'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00001'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00020'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00025'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00024'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00015'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00002'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00018'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00021'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00019'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00005'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00007'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00022'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00004'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00023'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00006'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00010'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00017'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00012'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00008'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00003'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00009'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00014'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00016'`);
        await queryRunner.query(`DELETE FROM customers WHERE cust_code = 'C00011'`);
        

        // delete agent data
        await queryRunner.query(`DELETE FROM agents WHERE agent_code = 'A007'`);
        await queryRunner.query(`DELETE FROM agents WHERE agent_code = 'A003'`);
        await queryRunner.query(`DELETE FROM agents WHERE agent_code = 'A008'`);
        await queryRunner.query(`DELETE FROM agents WHERE agent_code = 'A011'`);
        await queryRunner.query(`DELETE FROM agents WHERE agent_code = 'A010'`);
        await queryRunner.query(`DELETE FROM agents WHERE agent_code = 'A012'`);
        await queryRunner.query(`DELETE FROM agents WHERE agent_code = 'A005'`);
        await queryRunner.query(`DELETE FROM agents WHERE agent_code = 'A001'`);
        await queryRunner.query(`DELETE FROM agents WHERE agent_code = 'A002'`);
        await queryRunner.query(`DELETE FROM agents WHERE agent_code = 'A006'`);
        await queryRunner.query(`DELETE FROM agents WHERE agent_code = 'A004'`);
        await queryRunner.query(`DELETE FROM agents WHERE agent_code = 'A009'`);
    }

}
