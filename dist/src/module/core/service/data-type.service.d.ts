import { DataType } from '@model';
import { BaseService } from '@shared';
import { DataTypeRepository } from '../repository/data-type.repository';
export declare const P_DATA_TYPE_LISTED = "2712ca04-7e7c-44b6-83c1-b8c7f332a0fb";
export declare const P_DATA_TYPE_CREATE = "03380c3a-3336-42f4-b8c2-e54084d35655";
export declare const P_DATA_TYPE_UPDATE = "00e77095-35ea-4755-bbae-46a1ba78e46e";
export declare const P_DATA_TYPE_DELETE = "0e481286-bd5d-4203-a374-a8f8f8735f33";
export declare class DataTypeService extends BaseService<DataType> {
    repo: DataTypeRepository;
    constructor(repo: DataTypeRepository);
}
