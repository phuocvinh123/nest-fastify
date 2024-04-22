import { Strategy } from 'passport-jwt';
import { User } from '@model';
import { UserRepository } from '@repository';
declare const AccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    readonly repo: UserRepository;
    constructor(repo: UserRepository);
    validate(payload: {
        userId: string;
        email: string;
    }): Promise<User>;
}
export {};
