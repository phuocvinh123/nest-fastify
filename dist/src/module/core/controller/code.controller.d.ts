import { I18nContext } from 'nestjs-i18n';
import { PaginationQueryDto } from '@shared';
import { CodeRelationshipResponseDto, CodeResponseDto, ListCodeResponseDto, CreateCodeRequestDto, UpdateCodeRequestDto } from '@dto';
import { CodeService } from '@service';
export declare class CodeController {
    private readonly service;
    constructor(service: CodeService);
    findAll(i18n: I18nContext, paginationQuery: PaginationQueryDto): Promise<ListCodeResponseDto>;
    findOne(i18n: I18nContext, id: string): Promise<CodeRelationshipResponseDto>;
    create(i18n: I18nContext, body: CreateCodeRequestDto): Promise<CodeResponseDto>;
    update(i18n: I18nContext, id: string, body: UpdateCodeRequestDto): Promise<CodeResponseDto>;
    updateDisable(i18n: I18nContext, id: string, boolean: string): Promise<CodeResponseDto>;
    remove(i18n: I18nContext, id: string): Promise<CodeResponseDto>;
}
