import { MultipartFile } from '@fastify/multipart';
import { I18nContext } from 'nestjs-i18n';
import { File } from '@model';
import { BaseService } from '@shared';
import { FileRepository } from '@repository';
export declare const P_FILE_LISTED = "f5d6c0fa-f0b7-4b19-a0ae-4bad5393df4e";
export declare const P_FILE_DETAIL = "750a578a-e346-4e45-ad84-4768f5ffec62";
export declare const P_FILE_CREATE = "6828ff01-024f-426d-aa81-70cce8d02157";
export declare const P_FILE_UPDATE = "794f9edf-4d17-42ad-bf6c-374a7ad28f1a";
export declare const P_FILE_DELETE = "1ed8a391-73e3-4056-bec8-5ad272b463a0";
export declare class FileService extends BaseService<File> {
    repo: FileRepository;
    private logger;
    constructor(repo: FileRepository);
    uploadFile(userId: string, file: MultipartFile): Promise<File | null>;
    private saveToLocalPath;
    deleteFromLocalPath(filePath: string): void;
    private renameFile;
    activeFiles(urls: string[]): Promise<void>;
    removeFiles(urls: string[]): Promise<void>;
    removeHard(url: string): Promise<File | null>;
    removeFile(data: File, i18n?: I18nContext): Promise<void>;
}
