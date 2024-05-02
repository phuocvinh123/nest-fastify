import { UserRole, Code, Address, ProductStore, Order } from '@model';
import { Base } from '@shared';
export declare class User extends Base {
    name: string;
    avatar?: string;
    beforeAvatar?(): void;
    afterAvatar?(): void;
    password?: string;
    beforePassword?(): Promise<void>;
    refreshToken?: string | null;
    beforeRefreshToken?(): Promise<void>;
    otp?: string | null;
    email?: string;
    phoneNumber: string;
    dob: Date;
    description: string;
    roleCode?: string;
    readonly role?: UserRole;
    readonly positionCode?: string;
    readonly position?: Code;
    startDate?: Date;
    dateLeave?: number;
    readonly dateOff: number;
    readonly address?: Address[];
    store?: ProductStore[];
    order?: Order;
}
