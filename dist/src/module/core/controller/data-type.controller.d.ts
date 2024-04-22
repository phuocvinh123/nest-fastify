import { I18nContext } from 'nestjs-i18n';
import { PaginationQueryDto } from '@shared';
import { CreateDataTypeRequestDto, DataTypeResponseDto, ListDataTypeResponseDto, UpdateDataTypeRequestDto } from '@dto';
import { DataTypeService } from '@service';
export declare class DataTypeController {
    private readonly service;
    constructor(service: DataTypeService);
    findAll(i18n: I18nContext, paginationQuery: PaginationQueryDto): Promise<ListDataTypeResponseDto>;
    findOne(i18n: I18nContext, id: string): Promise<DataTypeResponseDto>;
    create(i18n: I18nContext, body: CreateDataTypeRequestDto): Promise<DataTypeResponseDto>;
    update(i18n: I18nContext, id: string, body: UpdateDataTypeRequestDto): Promise<DataTypeResponseDto>;
    updateDisable(i18n: I18nContext, id: string, boolean: string): Promise<DataTypeResponseDto>;
    remove(i18n: I18nContext, id: string): Promise<DataTypeResponseDto>;
}
