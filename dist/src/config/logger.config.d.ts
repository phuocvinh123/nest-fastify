import { Logger } from 'typeorm';
import * as winston from 'winston';
export declare const loggerOptions: winston.LoggerOptions;
export declare class DbCustomLogger implements Logger {
    private logger;
    constructor();
    logQuery(query: string, parameters?: unknown[]): void;
    logQueryError(error: string | Error, query: string, parameters?: unknown[]): void;
    logQuerySlow(time: number, query: string, parameters?: unknown[]): void;
    logSchemaBuild(message: string): void;
    logMigration(message: string): void;
    log(level: 'log' | 'info' | 'warn', message: unknown): void;
}
