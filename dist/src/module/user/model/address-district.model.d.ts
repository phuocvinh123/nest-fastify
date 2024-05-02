import { Base } from '@shared';
import { Address } from '@model';
import { AddressProvince, AddressWard } from '@model';
export declare class AddressDistrict extends Base {
    name: string;
    code: string;
    codeProvince: string;
    provinceItem?: AddressProvince;
    item?: Address;
    wardItem?: AddressWard[];
}
