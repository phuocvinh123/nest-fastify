import { PaginationResponsesDto } from '@shared';
import { AddressProvince } from '@model';
declare const AddressProvinceDto_base: import("@nestjs/common").Type<Partial<Omit<AddressProvince, "name" | "isDeleted" | "createdAt" | "updatedAt" | "code">>>;
export declare class AddressProvinceDto extends AddressProvinceDto_base {
    readonly code: string;
}
declare const ListProvinceResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListProvinceResponseDto extends ListProvinceResponseDto_base {
    readonly data: AddressProvinceDto[];
}
export {};
