import { BaseRepository } from '@shared';
import { Parameter } from '@model';
import { DataSource } from 'typeorm';
export declare class ParameterRepository extends BaseRepository<Parameter> {
    readonly dataSource: DataSource;
    constructor(dataSource: DataSource);
    getDataByCode(code: string): Promise<Parameter | null>;
}
