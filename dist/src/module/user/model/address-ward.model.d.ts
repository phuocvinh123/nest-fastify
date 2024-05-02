import { Base } from '@shared';
import { Address, AddressDistrict, OrderAddress } from '@model';
export declare class AddressWard extends Base {
    name: string;
    code: string;
    codeDistrict: string;
    districtItem?: AddressDistrict;
    item?: Address;
    orderAddress?: OrderAddress[];
}
