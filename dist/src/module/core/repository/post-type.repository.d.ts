import { DataSource } from 'typeorm';
import { PostType } from '@model';
import { BaseRepository } from '@shared';
export declare class PostTypeRepository extends BaseRepository<PostType> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    getTree(): Promise<PostType[]>;
}
