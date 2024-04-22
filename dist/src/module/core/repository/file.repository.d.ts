import { BaseRepository } from '@shared';
import { File } from '@model';
import { DataSource } from 'typeorm';
export declare class FileRepository extends BaseRepository<File> {
    readonly dataSource: DataSource;
    constructor(dataSource: DataSource);
    getDataByUrl(url: string): Promise<File | null>;
}
