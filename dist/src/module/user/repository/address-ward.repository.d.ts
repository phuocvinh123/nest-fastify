import { DataSource } from 'typeorm';
import { BaseRepository } from '@shared';
import { AddressWard } from '@model';
export declare class AddressWardRepository extends BaseRepository<AddressWard> {
    readonly dataSource: DataSource;
    constructor(dataSource: DataSource);
}
