import { CodeTypeDto } from '@dto';
import { Code } from '@model';
import { DefaultResponsesDto, PaginationResponsesDto } from '@shared';
declare const CreateCodeRequestDto_base: import("@nestjs/common").Type<Pick<Code, "type" | "name" | "code" | "description">>;
export declare class CreateCodeRequestDto extends CreateCodeRequestDto_base {
}
declare const UpdateCodeRequestDto_base: import("@nestjs/common").Type<Partial<CreateCodeRequestDto>>;
export declare class UpdateCodeRequestDto extends UpdateCodeRequestDto_base {
}
declare const CodeDto_base: import("@nestjs/common").Type<Partial<Omit<Code, "users" | "isDeleted" | "createdAt" | "updatedAt" | "item">>>;
export declare class CodeDto extends CodeDto_base {
}
declare const CodeResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class CodeResponseDto extends CodeResponseDto_base {
    readonly data: CodeDto | null;
}
declare const ListCodeResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListCodeResponseDto extends ListCodeResponseDto_base {
    readonly data: CodeDto[];
}
declare const CodeRelationshipDto_base: import("@nestjs/common").Type<Partial<Omit<Code, "users" | "isDeleted" | "createdAt" | "updatedAt" | "item">>>;
export declare class CodeRelationshipDto extends CodeRelationshipDto_base {
    item?: CodeTypeDto;
}
declare const CodeRelationshipResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class CodeRelationshipResponseDto extends CodeRelationshipResponseDto_base {
    readonly data: CodeRelationshipDto | null;
}
export {};
