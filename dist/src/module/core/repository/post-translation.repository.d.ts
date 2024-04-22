import { DataSource } from 'typeorm';
import { PostTranslation } from '@model';
import { BaseRepository } from '@shared';
export declare class PostTranslationRepository extends BaseRepository<PostTranslation> {
    readonly dataSource: DataSource;
    constructor(dataSource: DataSource);
    getDataBySlug(slug: string): Promise<PostTranslation | null>;
}
