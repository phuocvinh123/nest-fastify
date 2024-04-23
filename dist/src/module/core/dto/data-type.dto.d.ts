import { DefaultResponsesDto, PaginationResponsesDto } from '@shared';
import { DataType } from '@model';
declare const CreateDataTypeRequestDto_base: import("@nestjs/common").Type<Pick<DataType, "name" | "code">>;
export declare class CreateDataTypeRequestDto extends CreateDataTypeRequestDto_base {
}
declare const UpdateDataTypeRequestDto_base: import("@nestjs/common").Type<Pick<DataType, "name">>;
export declare class UpdateDataTypeRequestDto extends UpdateDataTypeRequestDto_base {
}
declare const DataTypeDto_base: import("@nestjs/common").Type<Partial<Omit<DataType, "isDeleted" | "createdAt" | "updatedAt" | "items">>>;
export declare class DataTypeDto extends DataTypeDto_base {
}
declare const DataTypeResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class DataTypeResponseDto extends DataTypeResponseDto_base {
    readonly data: DataTypeDto | null;
}
declare const ListDataTypeResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListDataTypeResponseDto extends ListDataTypeResponseDto_base {
    readonly data: DataTypeDto[];
}
export {};
