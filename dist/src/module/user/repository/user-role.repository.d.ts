import { DataSource } from 'typeorm';
import { UserRole } from '@model';
import { BaseRepository } from '@shared';
export declare class UserRoleRepository extends BaseRepository<UserRole> {
    readonly dataSource: DataSource;
    constructor(dataSource: DataSource);
}
