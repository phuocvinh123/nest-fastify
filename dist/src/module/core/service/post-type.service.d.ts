import { BaseService } from '@shared';
import { PostType } from '@model';
import { PostRepository, PostTypeRepository } from '@repository';
import { DeepPartial } from 'typeorm/common/DeepPartial';
import { CreatePostTypeRequestDto } from '@dto';
export declare const P_POST_TYPE_LISTED = "efa34c52-8c9a-444d-a82b-8bec109dbab5";
export declare const P_POST_TYPE_CREATE = "87cb77c4-565c-43ec-bffc-fbaf5077c2be";
export declare const P_POST_TYPE_UPDATE = "bfa36cef-71c4-4f08-89e6-d7e0c1c03ba4";
export declare const P_POST_TYPE_DELETE = "cd00c62e-1ec4-4c61-b273-cdd6867a3212";
export declare class PostTypeService extends BaseService<PostType> {
    repo: PostTypeRepository;
    repoPost: PostRepository;
    constructor(repo: PostTypeRepository, repoPost: PostRepository);
    findTree(): Promise<PostType[]>;
    createTree(body: DeepPartial<CreatePostTypeRequestDto>): Promise<PostType | null>;
    removeCheck(id: string): Promise<PostType | null>;
}
