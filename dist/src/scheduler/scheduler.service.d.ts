import { FileService } from '@service';
export declare class SchedulerService {
    fileService: FileService;
    private logger;
    constructor(fileService: FileService);
    clearFiles(): Promise<void>;
}
