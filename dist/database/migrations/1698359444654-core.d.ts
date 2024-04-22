import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class Core1698359444654 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
