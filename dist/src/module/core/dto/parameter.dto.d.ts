import { DefaultResponsesDto, PaginationResponsesDto } from '@shared';
import { Parameter } from '@model';
declare const CreateParameterRequestDto_base: import("@nestjs/common").Type<Pick<Parameter, "vn" | "code" | "en">>;
export declare class CreateParameterRequestDto extends CreateParameterRequestDto_base {
}
declare const UpdateParameterRequestDto_base: import("@nestjs/common").Type<Partial<CreateParameterRequestDto>>;
export declare class UpdateParameterRequestDto extends UpdateParameterRequestDto_base {
}
declare const ParameterDto_base: import("@nestjs/common").Type<Partial<Omit<Parameter, "isDeleted" | "createdAt" | "updatedAt">>>;
export declare class ParameterDto extends ParameterDto_base {
}
declare const ParameterResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class ParameterResponseDto extends ParameterResponseDto_base {
    readonly data: ParameterDto | null;
}
declare const ListParameterResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListParameterResponseDto extends ListParameterResponseDto_base {
    readonly data: ParameterDto[];
}
export {};
