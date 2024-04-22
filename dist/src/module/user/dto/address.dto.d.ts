import { DefaultResponsesDto, PaginationResponsesDto } from '@shared';
import { Address } from '@model';
declare const CreateAddressRequestDto_base: import("@nestjs/common").Type<Pick<Address, "codeProvince" | "codeDistrict" | "codeWard" | "specificAddress">>;
export declare class CreateAddressRequestDto extends CreateAddressRequestDto_base {
}
declare const UpdateAddressRequestDto_base: import("@nestjs/common").Type<Partial<CreateAddressRequestDto>>;
export declare class UpdateAddressRequestDto extends UpdateAddressRequestDto_base {
}
declare const AddressDto_base: import("@nestjs/common").Type<Partial<Omit<Address, "isDeleted" | "createdAt" | "updatedAt" | "specificAddress">>>;
export declare class AddressDto extends AddressDto_base {
}
declare const AddressResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class AddressResponseDto extends AddressResponseDto_base {
    readonly data: AddressDto | null;
}
declare const ListAddressResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListAddressResponseDto extends ListAddressResponseDto_base {
    readonly data: AddressDto[];
}
export {};
