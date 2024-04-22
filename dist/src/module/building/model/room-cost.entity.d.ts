import { Room } from '@model';
export declare class RoomCost {
    id: number;
    name: string;
    description: string;
    unitPrice: number;
    unit: string;
    roomId: number;
    updatedAt: Date;
    createdAt: Date;
    updatedBy: number;
    room: Room;
}
