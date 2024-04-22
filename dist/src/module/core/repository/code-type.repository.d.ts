import { DataSource } from 'typeorm';
import { BaseRepository } from '@shared';
import { CodeType } from '@model';
export declare class CodeTypeRepository extends BaseRepository<CodeType> {
    readonly dataSource: DataSource;
    constructor(dataSource: DataSource);
    getDataByCodeJoinItems(code: string): Promise<CodeType | null>;
}
