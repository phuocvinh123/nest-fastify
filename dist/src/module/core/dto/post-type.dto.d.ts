import { DefaultResponsesDto, PaginationResponsesDto } from '@shared';
import { PostType } from '@model';
declare const CreatePostTypeRequestDto_base: import("@nestjs/common").Type<Pick<PostType, "name" | "code">>;
export declare class CreatePostTypeRequestDto extends CreatePostTypeRequestDto_base {
    idChildren?: string;
}
declare const UpdatePostTypeRequestDto_base: import("@nestjs/common").Type<Pick<PostType, "name" | "code">>;
export declare class UpdatePostTypeRequestDto extends UpdatePostTypeRequestDto_base {
}
declare const PostTypeDto_base: import("@nestjs/common").Type<Partial<Omit<PostType, "isDeleted" | "createdAt" | "updatedAt" | "items">>>;
export declare class PostTypeDto extends PostTypeDto_base {
}
declare const PostTypeResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class PostTypeResponseDto extends PostTypeResponseDto_base {
    readonly data: PostTypeDto | null;
}
declare const ListPostTypeResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListPostTypeResponseDto extends ListPostTypeResponseDto_base {
    readonly data: PostTypeDto[];
}
export {};
