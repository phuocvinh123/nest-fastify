import { Building } from '@model';
import { BuildingRepository } from '@repository';
import { BaseService } from '@shared';
export declare const P_BUILDING_LISTED = "d278abcb-1956-4b45-95c1-2ab612110ec6";
export declare const P_BUILDING_CREATE = "d9185449-e2ac-4e72-9c9f-25788c23d5ba";
export declare const P_BUILDING_UPDATE = "3d478437-949b-4ae7-9c21-79cabb1663a3";
export declare const P_BUILDING_DELETE = "275ebda7-3e03-4c93-b352-baa7705528aa";
export declare class BuildingService extends BaseService<Building> {
    repo: BuildingRepository;
    constructor(repo: BuildingRepository);
}
