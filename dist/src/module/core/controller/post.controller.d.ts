import { I18nContext } from 'nestjs-i18n';
import { PostResponseDto, ListPostResponseDto, CreatePostRequestDto, UpdatePostRequestDto, ArrayPostResponseDto } from '@dto';
import { PostService } from '@service';
import { PaginationQueryDto } from '@shared';
export declare class PostController {
    private readonly service;
    constructor(service: PostService);
    findAll(i18n: I18nContext, paginationQuery: PaginationQueryDto): Promise<ListPostResponseDto>;
    findOneByArray(i18n: I18nContext, query: PaginationQueryDto): Promise<ArrayPostResponseDto>;
    findSlug(i18n: I18nContext, slug: string): Promise<PostResponseDto>;
    findOne(i18n: I18nContext, id: string): Promise<PostResponseDto>;
    create(i18n: I18nContext, body: CreatePostRequestDto): Promise<PostResponseDto>;
    update(i18n: I18nContext, id: string, body: UpdatePostRequestDto): Promise<PostResponseDto>;
    updateDisable(i18n: I18nContext, id: string, boolean: string): Promise<PostResponseDto>;
    remove(i18n: I18nContext, id: string): Promise<PostResponseDto>;
}
