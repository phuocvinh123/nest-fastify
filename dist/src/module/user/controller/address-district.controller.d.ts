import { I18nContext } from 'nestjs-i18n';
import { PaginationQueryDto } from '@shared';
import { ListDistrictResponseDto } from '@dto';
import { AddressDistrictService } from '@service';
export declare class AddressDistrictController {
    private readonly service;
    constructor(service: AddressDistrictService);
    findAll(i18n: I18nContext, paginationQuery: PaginationQueryDto): Promise<ListDistrictResponseDto>;
}
