import { PaginationResponsesDto } from '@shared';
import { AddressWard } from '@model';
declare const AddressWardDto_base: import("@nestjs/common").Type<Partial<Omit<AddressWard, "name" | "isDeleted" | "createdAt" | "updatedAt" | "code" | "codeDistrict">>>;
export declare class AddressWardDto extends AddressWardDto_base {
}
declare const ListWardResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListWardResponseDto extends ListWardResponseDto_base {
    readonly data: AddressWardDto[];
}
export {};
