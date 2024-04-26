import { PaginationResponsesDto } from '@shared';
import { AddressDistrict } from '@model';
declare const AddressDistrictDto_base: import("@nestjs/common").Type<Partial<Omit<AddressDistrict, "name" | "isDeleted" | "createdAt" | "updatedAt" | "code" | "codeProvince">>>;
export declare class AddressDistrictDto extends AddressDistrictDto_base {
    readonly code: string;
}
declare const ListDistrictResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListDistrictResponseDto extends ListDistrictResponseDto_base {
    readonly data: AddressDistrictDto[];
}
export {};
