import { Post } from '@model';
import { Base } from '@shared';
export declare class PostTranslation extends Base {
    language: string;
    name: string;
    description?: string;
    slug: string;
    content?: string;
    beforeContent?(): void;
    afterContent?(): void;
    postId?: string;
    post?: Post;
}
