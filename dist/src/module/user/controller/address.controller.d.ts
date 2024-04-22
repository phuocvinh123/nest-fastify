import { I18nContext } from 'nestjs-i18n';
import { PaginationQueryDto } from '@shared';
import { ListAddressResponseDto, AddressResponseDto, CreateAddressRequestDto, UpdateAddressRequestDto } from '@dto';
import { AddressService } from '@service';
import { User } from '@model';
export declare class AddressController {
    private readonly service;
    constructor(service: AddressService);
    findAll(i18n: I18nContext, user: User, paginationQuery: PaginationQueryDto): Promise<ListAddressResponseDto>;
    findOne(i18n: I18nContext, id: string): Promise<AddressResponseDto>;
    create(user: User, i18n: I18nContext, body: CreateAddressRequestDto): Promise<AddressResponseDto>;
    update(i18n: I18nContext, id: string, body: UpdateAddressRequestDto): Promise<AddressResponseDto>;
    remove(i18n: I18nContext, id: string): Promise<AddressResponseDto>;
}
