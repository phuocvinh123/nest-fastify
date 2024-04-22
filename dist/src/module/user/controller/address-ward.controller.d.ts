import { I18nContext } from 'nestjs-i18n';
import { PaginationQueryDto } from '@shared';
import { ListWardResponseDto } from '@dto';
import { AddressWardService } from '@service';
export declare class AddressWardController {
    private readonly service;
    constructor(service: AddressWardService);
    findAll(i18n: I18nContext, paginationQuery: PaginationQueryDto): Promise<ListWardResponseDto>;
}
