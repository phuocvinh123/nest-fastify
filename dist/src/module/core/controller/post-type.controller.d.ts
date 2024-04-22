import { I18nContext } from 'nestjs-i18n';
import { PaginationQueryDto } from '@shared';
import { CreatePostTypeRequestDto, PostTypeResponseDto, ListPostTypeResponseDto, UpdatePostTypeRequestDto } from '@dto';
import { PostTypeService } from '@service';
export declare class PostTypeController {
    private readonly service;
    constructor(service: PostTypeService);
    findAll(i18n: I18nContext, paginationQuery: PaginationQueryDto): Promise<ListPostTypeResponseDto>;
    findTree(i18n: I18nContext): Promise<ListPostTypeResponseDto>;
    findOne(i18n: I18nContext, id: string): Promise<PostTypeResponseDto>;
    create(i18n: I18nContext, body: CreatePostTypeRequestDto): Promise<PostTypeResponseDto>;
    update(i18n: I18nContext, id: string, body: UpdatePostTypeRequestDto): Promise<PostTypeResponseDto>;
    updateDisable(i18n: I18nContext, id: string, boolean: string): Promise<PostTypeResponseDto>;
    remove(i18n: I18nContext, id: string): Promise<PostTypeResponseDto>;
}
