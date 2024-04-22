import { DataSource } from 'typeorm';
import { BaseRepository } from '@shared';
import { Data } from '@model';
import { CreateDataRequestDto, UpdateDataRequestDto } from '@dto';
export declare class DataRepository extends BaseRepository<Data> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    createWithTranslation({ translations, ...body }: CreateDataRequestDto): Promise<Data | null>;
    updateWithTranslation(id: string, { translations, ...body }: UpdateDataRequestDto): Promise<Data | null>;
}
