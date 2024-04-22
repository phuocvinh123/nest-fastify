import { BaseService } from '@shared';
import { AddressWard } from '@model';
import { AddressWardRepository } from '../repository/address-ward.repository';
export declare class AddressWardService extends BaseService<AddressWard> {
    repo: AddressWardRepository;
    constructor(repo: AddressWardRepository);
}
