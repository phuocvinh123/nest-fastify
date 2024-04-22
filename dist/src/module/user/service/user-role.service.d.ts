import { UserRole } from '@model';
import { BaseService } from '@shared';
import { UserRoleRepository } from '@repository';
export declare const P_USER_ROLE_LISTED = "8f559613-ef55-4ef0-8068-8c37e84b75de";
export declare const P_USER_ROLE_DETAIL = "35ea86b5-e591-4819-9c41-4d35ed580d0b";
export declare const P_USER_ROLE_CREATE = "f6732943-cb1d-484b-8644-7740a295e3e3";
export declare const P_USER_ROLE_UPDATE = "3e8aa2c2-35bf-4a56-8bf2-8f8de240e24c";
export declare const P_USER_ROLE_DELETE = "62fd3bc2-0921-4113-9b5b-9966dd5a0517";
export declare class UserRoleService extends BaseService<UserRole> {
    repo: UserRoleRepository;
    constructor(repo: UserRoleRepository);
}
