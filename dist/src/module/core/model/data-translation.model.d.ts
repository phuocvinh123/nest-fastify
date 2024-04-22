import { Data } from '@model';
import { Base } from '@shared';
export declare class DataTranslation extends Base {
    language: string;
    name: string;
    description?: string;
    position?: string;
    content?: string;
    beforeContent?(): void;
    afterContent?(): void;
    dataId?: string;
    data?: Data;
}
