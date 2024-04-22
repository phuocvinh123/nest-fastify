import { I18nContext } from 'nestjs-i18n';
import { PaginationQueryDto } from '@shared';
import { ParameterResponseDto, ListParameterResponseDto, CreateParameterRequestDto, UpdateParameterRequestDto } from '@dto';
import { ParameterService } from '@service';
export declare class ParameterController {
    private readonly service;
    constructor(service: ParameterService);
    findAll(i18n: I18nContext, paginationQuery: PaginationQueryDto): Promise<ListParameterResponseDto>;
    findOne(i18n: I18nContext, code: string): Promise<ParameterResponseDto>;
    create(i18n: I18nContext, body: CreateParameterRequestDto): Promise<ParameterResponseDto>;
    update(i18n: I18nContext, id: string, body: UpdateParameterRequestDto): Promise<ParameterResponseDto>;
    updateDisable(i18n: I18nContext, id: string, boolean: string): Promise<ParameterResponseDto>;
    remove(i18n: I18nContext, id: string): Promise<ParameterResponseDto>;
}
