import { BuildingService } from '@service';
export declare class AppController {
    private readonly buildingService;
    constructor(buildingService: BuildingService);
    root(address: string): Promise<any>;
    detail(id: string): Promise<any>;
}
