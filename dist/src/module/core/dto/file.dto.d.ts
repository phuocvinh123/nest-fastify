import { DefaultResponsesDto, PaginationResponsesDto } from '@shared';
import { File } from '@model';
declare const UpdateFileRequestDto_base: import("@nestjs/common").Type<Pick<File, "description" | "url">>;
export declare class UpdateFileRequestDto extends UpdateFileRequestDto_base {
}
declare const FileResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class FileResponseDto extends FileResponseDto_base {
    readonly data: File | null;
}
declare const ListFileResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListFileResponseDto extends ListFileResponseDto_base {
    readonly data: File[];
}
export {};
