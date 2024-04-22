import { PostType, PostTranslation } from '@model';
import { Base } from '@shared';
export declare class Post extends Base {
    type: string;
    thumbnailUrl?: string;
    beforeThumbnailUrl?(): void;
    afterThumbnailUrl?(): void;
    item?: PostType;
    translations?: PostTranslation[];
}
