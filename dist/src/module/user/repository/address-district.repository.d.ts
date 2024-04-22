import { DataSource } from 'typeorm';
import { BaseRepository } from '@shared';
import { AddressDistrict } from '@model';
export declare class AddressDistrictRepository extends BaseRepository<AddressDistrict> {
    readonly dataSource: DataSource;
    constructor(dataSource: DataSource);
}
