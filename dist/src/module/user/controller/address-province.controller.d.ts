import { I18nContext } from 'nestjs-i18n';
import { PaginationQueryDto } from '@shared';
import { ListProvinceResponseDto } from '@dto';
import { AddressProvinceService } from '@service';
export declare class AddressProvinceController {
    private readonly service;
    constructor(service: AddressProvinceService);
    findAll(i18n: I18nContext, paginationQuery: PaginationQueryDto): Promise<ListProvinceResponseDto>;
}
