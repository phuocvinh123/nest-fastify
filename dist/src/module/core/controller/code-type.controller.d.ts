import { I18nContext } from 'nestjs-i18n';
import { PaginationQueryDto } from '@shared';
import { CodeTypeResponseDto, CodeTypeRelationshipResponseDto, ListCodeTypeResponseDto, CreateCodeTypeRequestDto, UpdateCodeTypeRequestDto } from '@dto';
import { CodeTypeService } from '@service';
export declare class CodeTypeController {
    private readonly service;
    constructor(service: CodeTypeService);
    findAll(i18n: I18nContext, paginationQuery: PaginationQueryDto): Promise<ListCodeTypeResponseDto>;
    findOne(i18n: I18nContext, code: string): Promise<CodeTypeRelationshipResponseDto>;
    create(i18n: I18nContext, body: CreateCodeTypeRequestDto): Promise<CodeTypeResponseDto>;
    update(i18n: I18nContext, id: string, body: UpdateCodeTypeRequestDto): Promise<CodeTypeResponseDto>;
    updateDisable(i18n: I18nContext, id: string, boolean: string): Promise<CodeTypeResponseDto>;
    remove(i18n: I18nContext, id: string): Promise<CodeTypeResponseDto>;
}
