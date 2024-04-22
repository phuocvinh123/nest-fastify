import { BaseRepository } from '@shared';
import { Building } from '@model';
import { DataSource } from 'typeorm';
import { RoomRepository } from './room.repository';
export declare class BuildingRepository extends BaseRepository<Building> {
    readonly dataSource: DataSource;
    readonly roomRepository: RoomRepository;
    constructor(dataSource: DataSource, roomRepository: RoomRepository);
    getBuildings(): Promise<{
        statusCode: number;
        message: string;
        data: Building[];
        total: number;
    }>;
}
