import { Base } from '@shared';
import { Data } from '@model';
export declare class DataType extends Base {
    name: string;
    code: string;
    isPrimary: boolean;
    items?: Data[];
}
