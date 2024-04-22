import { Building } from '@model';
export declare class BuildingMedia {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    updatedBy: number;
    buildingId: number;
    isDefault: boolean;
    size: number;
    mediaType: string;
    building: Building;
}
