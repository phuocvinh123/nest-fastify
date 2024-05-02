import { Base } from '@shared';
import { Address, AddressDistrict, OrderAddress } from '@model';
export declare class AddressProvince extends Base {
    name: string;
    code: string;
    items?: Address[];
    districtItem?: AddressDistrict[];
    orderAddress?: OrderAddress[];
}
