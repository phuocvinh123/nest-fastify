import { Room } from '@model';
import { BuildingType } from './type.enum';
import { BuildingUtility } from './building-utility.entity';
import { AppUser } from './app-user.entity';
import { BuildingMedia } from './building-media.entity';
import { BuildingAddress } from './building-address.entity';
import { BuildingContent } from './building-content.entity';
export declare class Building {
    id: number;
    name: string;
    type: BuildingType;
    address: string;
    description: string;
    media: string;
    isDeleted: boolean;
    createdBy: number;
    updatedBy: number;
    buildingAddressId: number;
    landlord: AppUser;
    buildingMedia: BuildingMedia[];
    utilities: BuildingUtility[];
    rooms: Room[];
    buildingAddress: BuildingAddress;
    buildingContent: BuildingContent[];
}
