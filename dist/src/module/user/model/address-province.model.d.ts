import { Base } from '@shared';
import { Address, AddressDistrict } from '@model';
export declare class AddressProvince extends Base {
    name: string;
    code: string;
    items?: Address[];
    districtItem?: AddressDistrict[];
}
