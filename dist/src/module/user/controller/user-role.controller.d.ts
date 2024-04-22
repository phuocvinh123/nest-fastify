import { I18nContext } from 'nestjs-i18n';
import { PaginationQueryDto } from '@shared';
import { CreateUserRoleRequestDto, ListUserRoleResponseDto, PermissionResponseDto, UpdateUserRoleRequestDto, UserRoleResponseDto } from '@dto';
import { UserRoleService } from '@service';
export declare class UserRoleController {
    private readonly service;
    constructor(service: UserRoleService);
    findAll(i18n: I18nContext, paginationQuery: PaginationQueryDto): Promise<ListUserRoleResponseDto>;
    create(i18n: I18nContext, body: CreateUserRoleRequestDto): Promise<UserRoleResponseDto>;
    update(i18n: I18nContext, id: string, body: UpdateUserRoleRequestDto): Promise<UserRoleResponseDto>;
    updateDisable(i18n: I18nContext, id: string, boolean: string): Promise<UserRoleResponseDto>;
    remove(i18n: I18nContext, id: string): Promise<UserRoleResponseDto>;
    findAllPermission(i18n: I18nContext): Promise<PermissionResponseDto>;
    findOne(i18n: I18nContext, id: string): Promise<UserRoleResponseDto>;
}
