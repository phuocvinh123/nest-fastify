import { BuildingService, RoomService } from '@service';
import { PaginationQueryDto } from '@shared';
import { Building, Room } from '@model';
export declare class AppController {
    private readonly buildingService;
    private readonly roomService;
    constructor(buildingService: BuildingService, roomService: RoomService);
    root(address: string): Promise<{
        bu: Building[] | null;
        uniqueProvinces: string[] | null;
        data: Record<string, any>;
    }>;
    detail(id: string): Promise<{
        bui: Building | null;
    }>;
    detail1(paginableParams: PaginationQueryDto): Promise<{
        bu: Building[] | null;
        uniqueProvinces: string[] | null;
        data: Record<string, any>;
    }>;
    detail2(id: number): Promise<{
        room: Room | null;
        bu: Building | null;
    }>;
}
