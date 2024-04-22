import { User } from '@model';
import { Base } from '@shared';
export declare class UserRole extends Base {
    code: string;
    name: string;
    isSystemAdmin: boolean;
    readonly permissions?: string[];
    users?: User[];
}
