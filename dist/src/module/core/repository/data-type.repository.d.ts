import { DataSource } from 'typeorm';
import { BaseRepository } from '@shared';
import { DataType } from '@model';
export declare class DataTypeRepository extends BaseRepository<DataType> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
}
