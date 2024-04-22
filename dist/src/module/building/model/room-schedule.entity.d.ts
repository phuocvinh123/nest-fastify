import { Room } from '@model';
export declare class RoomSchedule {
    id: number;
    customerName: string;
    customerPhoneNumber: string;
    appointmentTime: Date;
    updatedAt: Date;
    updatedBy: number;
    roomId: number;
    room: Room;
}
