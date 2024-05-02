import { AddressDistrict, AddressProvince, AddressWard, User } from '@model';
import { Base } from '@shared';
export declare class Address extends Base {
    codeProvince: string;
    provinceItem: AddressProvince;
    codeDistrict: string;
    districtItem: AddressDistrict;
    codeWard: string;
    wardItem: AddressWard;
    specificAddress: string;
    userId?: string;
    readonly user: User;
}
