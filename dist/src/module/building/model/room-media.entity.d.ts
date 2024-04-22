import { Room } from '@model';
export declare class RoomMedia {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    updatedBy: number;
    roomId: number;
    isDefault: boolean;
    size: number;
    mediaType: string;
    room: Room;
}
