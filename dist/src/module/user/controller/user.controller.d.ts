import { I18nContext } from 'nestjs-i18n';
import { CreateUserRequestDto, ListUserResponseDto, UpdateUserRequestDto, UserResponseDto } from '@dto';
import { PaginationQueryDto } from '@shared';
import { UserService } from '@service';
export declare class UserController {
    private readonly service;
    constructor(service: UserService);
    findAll(i18n: I18nContext, paginationQuery: PaginationQueryDto): Promise<ListUserResponseDto>;
    findOne(i18n: I18nContext, id: string): Promise<UserResponseDto>;
    create(i18n: I18nContext, createData: CreateUserRequestDto): Promise<UserResponseDto>;
    update(i18n: I18nContext, id: string, updateData: UpdateUserRequestDto): Promise<UserResponseDto>;
    updateDisable(i18n: I18nContext, id: string, boolean: string): Promise<UserResponseDto>;
    remove(i18n: I18nContext, id: string): Promise<UserResponseDto>;
}
