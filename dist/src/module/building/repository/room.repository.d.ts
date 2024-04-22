import { BaseRepository } from '@shared';
import { Room } from '@model';
import { DataSource } from 'typeorm';
export declare class RoomRepository extends BaseRepository<Room> {
    readonly dataSource: DataSource;
    constructor(dataSource: DataSource);
    getCountByBuilding(id: number): Promise<number>;
}
