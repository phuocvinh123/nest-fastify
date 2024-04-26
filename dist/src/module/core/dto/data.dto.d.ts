import { DefaultResponsesDto, PaginationResponsesDto } from '@shared';
import { Data, DataTranslation } from '@model';
declare const CreateDataRequestDto_base: import("@nestjs/common").Type<Pick<Data, "name" | "type" | "image" | "isDisabled" | "createdAt" | "order">>;
export declare class CreateDataRequestDto extends CreateDataRequestDto_base {
    translations?: CreateDataTranslationRequestDto[];
}
declare const CreateDataTranslationRequestDto_base: import("@nestjs/common").Type<Pick<DataTranslation, "id" | "description" | "name" | "content" | "language" | "position">>;
export declare class CreateDataTranslationRequestDto extends CreateDataTranslationRequestDto_base {
}
declare const UpdateDataRequestDto_base: import("@nestjs/common").Type<Partial<CreateDataRequestDto>>;
export declare class UpdateDataRequestDto extends UpdateDataRequestDto_base {
}
declare const ArrayDataResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class ArrayDataResponseDto extends ArrayDataResponseDto_base {
    readonly data: {
        [key: string]: Data[];
    };
}
declare const DataDto_base: import("@nestjs/common").Type<Partial<Omit<Data, "isDeleted" | "createdAt" | "updatedAt" | "item" | "translations">>>;
export declare class DataDto extends DataDto_base {
}
declare const DataResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class DataResponseDto extends DataResponseDto_base {
    readonly data: DataDto | null;
}
declare const ListDataResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListDataResponseDto extends ListDataResponseDto_base {
    readonly data: DataDto[];
}
export {};
