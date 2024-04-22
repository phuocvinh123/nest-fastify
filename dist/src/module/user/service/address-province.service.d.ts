import { BaseService } from '@shared';
import { AddressProvince } from '@model';
import { AddressProvinceRepository } from '../repository/address-province.repository';
export declare class AddressProvinceService extends BaseService<AddressProvince> {
    repo: AddressProvinceRepository;
    constructor(repo: AddressProvinceRepository);
}
