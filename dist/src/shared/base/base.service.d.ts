import { ObjectLiteral } from 'typeorm';
import { PaginationQueryDto, BaseRepository } from '@shared';
import { DeepPartial } from 'typeorm/common/DeepPartial';
export declare abstract class BaseService<T extends ObjectLiteral> {
    repo: BaseRepository<T>;
    listQuery: string[];
    listJoin: string[];
    listJoinCount: {
        name: string;
        key: string;
    }[];
    listHistoryKey: never[];
    joinColumn: string[];
    listInnerJoin: {
        key: string;
        condition: string;
    }[];
    protected constructor(repo: BaseRepository<T>);
    findAll(paginationQuery: PaginationQueryDto): Promise<[T[], number]>;
    findOne(id: string, listJoin?: string[]): Promise<T | null>;
    create(body: DeepPartial<T>): Promise<T | null>;
    update(id: string, body: DeepPartial<T>, callBack?: (data: T) => Promise<T>): Promise<T | null>;
    remove(id: string): Promise<T | null>;
    removeHard(id: string): Promise<T | null>;
}
