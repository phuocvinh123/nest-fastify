import { DataType, DataTranslation } from '@model';
import { Base } from '@shared';
export declare class Data extends Base {
    type: string;
    name?: string;
    image?: string;
    beforeImage?(): void;
    afterImage?(): void;
    order?: number;
    item?: DataType;
    translations?: DataTranslation[];
}
