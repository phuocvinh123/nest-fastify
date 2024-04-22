import { Code } from '@model';
import { Base } from '@shared';
export declare class CodeType extends Base {
    name: string;
    code: string;
    isPrimary?: boolean;
    items?: Code[];
}
