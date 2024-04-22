import { DataSource } from 'typeorm';
import { User } from '@model';
import { BaseRepository } from '@shared';
export declare class UserRepository extends BaseRepository<User> {
    readonly dataSource: DataSource;
    constructor(dataSource: DataSource);
    getDataByIdAndEmail(id: string, email: string): Promise<User | null>;
    getDataByIdAndEmailJoinRole(id: string, email: string): Promise<User | null>;
    getDataByEmailAndOTP(email: string, otp: string): Promise<User | null>;
    getDataByEmail(email: string, id?: string): Promise<User | null>;
    getDataByPhoneNumber(phoneNumber: string, id?: string): Promise<User | null>;
    getDataByEmailJoin(email: string): Promise<User | null>;
}
