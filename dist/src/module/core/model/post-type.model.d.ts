import { Base } from '@shared';
import { Post } from '@model';
export declare class PostType extends Base {
    name: string;
    code: string;
    isPrimary?: boolean;
    items?: Post[];
    children?: PostType[];
    parent?: PostType;
}
