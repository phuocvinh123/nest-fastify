import { DataSource } from 'typeorm';
import { BaseRepository } from '@shared';
import { AddressProvince } from '@model';
export declare class AddressProvinceRepository extends BaseRepository<AddressProvince> {
    readonly dataSource: DataSource;
    constructor(dataSource: DataSource);
}
