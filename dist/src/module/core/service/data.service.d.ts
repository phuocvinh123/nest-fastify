import { CreateDataRequestDto, UpdateDataRequestDto } from '@dto';
import { Data } from '@model';
import { DataRepository } from '@repository';
import { BaseService } from '@shared';
import { FileService } from './file.service';
export declare const P_DATA_LISTED = "1db70aa0-7541-4433-b2f6-fbd7bf8bf7bb";
export declare const P_DATA_CREATE = "c3ab9e11-7ba3-4afd-b5cb-c560362a3144";
export declare const P_DATA_UPDATE = "99ea12da-5800-4d6d-9e73-60c016a267a9";
export declare const P_DATA_DELETE = "2e8c8772-2505-4683-b6fa-13fa2570eee7";
export declare class DataService extends BaseService<Data> {
    repo: DataRepository;
    fileService: FileService;
    constructor(repo: DataRepository, fileService: FileService);
    findArrayCode(types: string[]): Promise<{
        [p: string]: Data[];
    }>;
    create(body: CreateDataRequestDto): Promise<Data | null>;
    update(id: string, body: UpdateDataRequestDto): Promise<Data | null>;
    removeHard(id: string): Promise<Data | null>;
}
