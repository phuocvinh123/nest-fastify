import { DataSource } from 'typeorm';
import { BaseRepository } from '@shared';
import { Address } from '@model';
export declare class AddressRepository extends BaseRepository<Address> {
    readonly dataSource: DataSource;
    constructor(dataSource: DataSource);
}
