import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
export declare class ParameterSeeder implements Seeder {
    run(dataSource: DataSource): Promise<void>;
}
