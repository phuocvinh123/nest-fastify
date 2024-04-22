import { DataSource } from 'typeorm';
import { BaseRepository } from '@shared';
import { Code } from '@model';
export declare class CodeRepository extends BaseRepository<Code> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
}
