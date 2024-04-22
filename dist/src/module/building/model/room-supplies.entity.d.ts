import { Room } from '@model';
export declare class RoomSupplies {
    id: number;
    service: string;
    description: string;
    quantity: number;
    roomId: number;
    updatedAt: Date;
    createdAt: Date;
    updatedBy: number;
    room: Room;
}
