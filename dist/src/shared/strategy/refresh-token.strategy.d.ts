import { Strategy } from 'passport-jwt';
import { FastifyRequest } from 'fastify';
import { User } from '@model';
import { UserRepository } from '@repository';
declare const RefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    private readonly repo;
    constructor(repo: UserRepository);
    validate(req: FastifyRequest, payload: {
        userId: string;
        email: string;
    }): Promise<User>;
}
export {};
