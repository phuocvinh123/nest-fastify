import { CreatePostRequestDto, UpdatePostRequestDto } from '@dto';
import { Post } from '@model';
import { PostRepository, PostTranslationRepository } from '@repository';
import { BaseService } from '@shared';
import { FileService } from './file.service';
export declare const P_POST_LISTED = "7c34dc92-cbbe-4419-8dbc-745818d76098";
export declare const P_POST_CREATE = "0ca9634c-3496-4059-bf86-5bec23c96b55";
export declare const P_POST_UPDATE = "eda2799a-4072-46a7-9a26-efa9a98036db";
export declare const P_POST_DELETE = "4097d5ff-e35c-4bff-a5b1-013ca1181762";
export declare class PostService extends BaseService<Post> {
    repo: PostRepository;
    repoTranslation: PostTranslationRepository;
    fileService: FileService;
    constructor(repo: PostRepository, repoTranslation: PostTranslationRepository, fileService: FileService);
    findArrayCode(types: string[]): Promise<{
        [p: string]: Post[];
    }>;
    findSlug(slug: string): Promise<Post | null>;
    create(body: CreatePostRequestDto): Promise<Post | null>;
    update(id: string, body: UpdatePostRequestDto): Promise<Post | null>;
    removeHard(id: string): Promise<Post | null>;
}
