import { CodeType, User } from '@model';
import { Base } from '@shared';
export declare class Code extends Base {
    code: string;
    type: string;
    name: string;
    description?: string;
    item?: CodeType;
    users?: User[];
}
