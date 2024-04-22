import { BaseService } from '@shared';
import { Address } from '@model';
import { AddressRepository } from '@repository';
export declare const P_ADDRESS_CREATE = "a9574d5e-269d-44f9-a5bb-41cf06d7bdda";
export declare const P_ADDRESS_UPDATE = "6d34b679-9c0e-123a-a2de-a11e37fadf72";
export declare const P_ADDRESS_DELETE = "e21ac25b-1111-443e-9999-e593789807c9";
export declare class AddressService extends BaseService<Address> {
    repo: AddressRepository;
    constructor(repo: AddressRepository);
}
