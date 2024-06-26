"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbCustomLogger = exports.loggerOptions = void 0;
const common_1 = require("@nestjs/common");
const winston = __importStar(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const nest_winston_1 = require("nest-winston");
const config_1 = require("./config");
const consoleTransportOptions = {
    format: winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike()),
    level: config_1.appConfig.LOG_LEVEL_CONSOLE,
};
const fileTransportOptions = {
    format: winston.format.combine(winston.format.timestamp(), winston.format.splat(), winston.format.json()),
    filename: 'application-%DATE%.log',
    dirname: './logs',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: false,
    maxSize: '20m',
    maxFiles: '14d',
    level: config_1.appConfig.LOG_LEVEL_FILE,
};
exports.loggerOptions = {
    transports: [new winston.transports.Console(consoleTransportOptions), new winston_daily_rotate_file_1.default(fileTransportOptions)],
};
class DbCustomLogger {
    constructor() {
        this.logger = new common_1.Logger('DbCustomLogger');
    }
    logQuery(query, parameters) {
        this.logger.log('logQuery->>>:', [query, parameters]);
    }
    logQueryError(error, query, parameters) {
        this.logger.error('logQueryError->>>:', error, query, parameters);
    }
    logQuerySlow(time, query, parameters) {
        this.logger.warn('logQuerySlow->>>:', time, query, parameters);
    }
    logSchemaBuild(message) {
        this.logger.debug('logSchemaBuild->>>:', message);
    }
    logMigration(message) {
        this.logger.debug('logMigration->>>:', message);
    }
    log(level, message) {
        switch (level) {
            case 'info':
                return this.logger.debug(message);
            case 'warn':
                return this.logger.warn(message);
            case 'log':
            default:
                return this.logger.log(message);
        }
    }
}
exports.DbCustomLogger = DbCustomLogger;
//# sourceMappingURL=logger.config.js.map