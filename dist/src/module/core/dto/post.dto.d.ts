import { Post, PostTranslation } from '@model';
import { DefaultResponsesDto, PaginationResponsesDto } from '@shared';
declare const CreatePostRequestDto_base: import("@nestjs/common").Type<Pick<Post, "type" | "isDisabled" | "createdAt" | "thumbnailUrl">>;
export declare class CreatePostRequestDto extends CreatePostRequestDto_base {
    translations?: CreatePostTranslationRequestDto[];
}
declare const CreatePostTranslationRequestDto_base: import("@nestjs/common").Type<Pick<PostTranslation, "id" | "description" | "name" | "content" | "language" | "slug">>;
export declare class CreatePostTranslationRequestDto extends CreatePostTranslationRequestDto_base {
}
declare const UpdatePostRequestDto_base: import("@nestjs/common").Type<Partial<CreatePostRequestDto>>;
export declare class UpdatePostRequestDto extends UpdatePostRequestDto_base {
}
declare const ArrayPostResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class ArrayPostResponseDto extends ArrayPostResponseDto_base {
    readonly data: {
        [key: string]: Post[];
    };
}
declare const PostDto_base: import("@nestjs/common").Type<Partial<Omit<Post, "isDeleted" | "createdAt" | "updatedAt" | "item" | "translations">>>;
export declare class PostDto extends PostDto_base {
}
declare const PostResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class PostResponseDto extends PostResponseDto_base {
    readonly data: PostDto | null;
}
declare const ListPostResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListPostResponseDto extends ListPostResponseDto_base {
    readonly data: PostDto[];
}
export {};
