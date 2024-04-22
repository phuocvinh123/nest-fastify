import { BaseService } from '@shared';
import { AddressDistrict } from '@model';
import { AddressDistrictRepository } from '../repository/address-district.repository';
export declare class AddressDistrictService extends BaseService<AddressDistrict> {
    repo: AddressDistrictRepository;
    constructor(repo: AddressDistrictRepository);
}
