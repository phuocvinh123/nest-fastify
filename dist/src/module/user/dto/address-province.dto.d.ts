import { PaginationResponsesDto } from '@shared';
import { AddressProvince } from '@model';
declare const AddressProvinceDto_base: import("@nestjs/common").Type<Partial<Omit<AddressProvince, "name" | "code" | "isDeleted" | "createdAt" | "updatedAt">>>;
export declare class AddressProvinceDto extends AddressProvinceDto_base {
    readonly code: string;
}
declare const ListProvinceResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListProvinceResponseDto extends ListProvinceResponseDto_base {
    readonly data: AddressProvinceDto[];
}
export {};
