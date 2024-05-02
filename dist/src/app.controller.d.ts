import { BuildingService } from '@service';
import { PaginationQueryDto } from '@shared';
export declare class AppController {
    private readonly buildingService;
    constructor(buildingService: BuildingService);
    root(address: string): Promise<any>;
    detail1(id: string): Promise<any>;
    detail2(id: number): Promise<any>;
    detail3(paginableParams: PaginationQueryDto): Promise<any>;
}
