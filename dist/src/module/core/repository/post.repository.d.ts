import { DataSource } from 'typeorm';
import { Post } from '@model';
import { CreatePostRequestDto, UpdatePostRequestDto } from '@dto';
import { BaseRepository } from '@shared';
export declare class PostRepository extends BaseRepository<Post> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    getCountByCode(code: string): Promise<number>;
    createWithTranslation({ translations, ...body }: CreatePostRequestDto): Promise<Post | null>;
    updateWithTranslation(id: string, { translations, ...body }: UpdatePostRequestDto): Promise<Post | null>;
}
