import { Room } from '@model';
export declare class RoomContent {
    id: number;
    roomId: number;
    content: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: number;
    updatedBy: number;
    isDeleted: boolean;
    room: Room;
}
