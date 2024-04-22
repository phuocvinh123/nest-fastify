import { I18nContext } from 'nestjs-i18n';
import { DataResponseDto, ListDataResponseDto, CreateDataRequestDto, UpdateDataRequestDto, ArrayDataResponseDto } from '@dto';
import { DataService } from '@service';
import { PaginationQueryDto } from '@shared';
export declare class DataController {
    private readonly service;
    constructor(service: DataService);
    findAll(i18n: I18nContext, paginationQuery: PaginationQueryDto): Promise<ListDataResponseDto>;
    findOneByArray(i18n: I18nContext, query: PaginationQueryDto): Promise<ArrayDataResponseDto>;
    findOne(i18n: I18nContext, id: string): Promise<DataResponseDto>;
    create(i18n: I18nContext, body: CreateDataRequestDto): Promise<DataResponseDto>;
    update(i18n: I18nContext, id: string, body: UpdateDataRequestDto): Promise<DataResponseDto>;
    updateDisable(i18n: I18nContext, id: string, boolean: string): Promise<DataResponseDto>;
    remove(i18n: I18nContext, id: string): Promise<DataResponseDto>;
}
