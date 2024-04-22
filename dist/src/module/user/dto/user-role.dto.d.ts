import { UserRole } from '@model';
import { DefaultResponsesDto, PaginationResponsesDto } from '@shared';
declare const CreateUserRoleRequestDto_base: import("@nestjs/common").Type<Pick<UserRole, "name" | "code" | "isSystemAdmin" | "permissions">>;
export declare class CreateUserRoleRequestDto extends CreateUserRoleRequestDto_base {
}
declare const UpdateUserRoleRequestDto_base: import("@nestjs/common").Type<Partial<CreateUserRoleRequestDto>>;
export declare class UpdateUserRoleRequestDto extends UpdateUserRoleRequestDto_base {
}
declare const ListUserRoleResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListUserRoleResponseDto extends ListUserRoleResponseDto_base {
    readonly data: UserRoleDto[];
}
declare const UserRoleDto_base: import("@nestjs/common").Type<Partial<Omit<UserRole, "isDeleted" | "createdAt" | "updatedAt" | "users">>>;
export declare class UserRoleDto extends UserRoleDto_base {
}
declare const PermissionResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class PermissionResponseDto extends PermissionResponseDto_base {
    readonly data: string[];
}
declare const UserRoleResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class UserRoleResponseDto extends UserRoleResponseDto_base {
    readonly data: UserRole | null;
}
export {};
