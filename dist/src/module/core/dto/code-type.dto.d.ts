import { CodeDto } from '@dto';
import { CodeType } from '@model';
import { DefaultResponsesDto, PaginationResponsesDto } from '@shared';
declare const CreateCodeTypeRequestDto_base: import("@nestjs/common").Type<Pick<CodeType, "name" | "code">>;
export declare class CreateCodeTypeRequestDto extends CreateCodeTypeRequestDto_base {
}
declare const UpdateCodeTypeRequestDto_base: import("@nestjs/common").Type<Pick<CodeType, "name">>;
export declare class UpdateCodeTypeRequestDto extends UpdateCodeTypeRequestDto_base {
}
declare const CodeTypeDto_base: import("@nestjs/common").Type<Partial<Omit<CodeType, "isDeleted" | "createdAt" | "updatedAt" | "items">>>;
export declare class CodeTypeDto extends CodeTypeDto_base {
}
declare const CodeTypeResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class CodeTypeResponseDto extends CodeTypeResponseDto_base {
    readonly data: CodeTypeDto | null;
}
declare const ListCodeTypeResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListCodeTypeResponseDto extends ListCodeTypeResponseDto_base {
    readonly data: CodeTypeDto[];
}
declare const CodeTypeRelationshipDto_base: import("@nestjs/common").Type<Partial<Omit<CodeType, "isDeleted" | "createdAt" | "updatedAt" | "items">>>;
export declare class CodeTypeRelationshipDto extends CodeTypeRelationshipDto_base {
    readonly items?: CodeDto[];
}
declare const CodeTypeRelationshipResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class CodeTypeRelationshipResponseDto extends CodeTypeRelationshipResponseDto_base {
    readonly data: CodeTypeRelationshipDto | null;
}
export {};
