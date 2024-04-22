"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
require("dotenv/config");
const config_1 = __importDefault(require("config"));
const NODE_ENV = process.env.NODE_ENV;
const LOG_LEVEL_CONSOLE = config_1.default.get('log.level.console');
const LOG_LEVEL_FILE = config_1.default.get('log.level.file');
const DOMAIN_FE = process.env.DOMAIN_FE;
const DOMAIN = process.env.DOMAIN;
const URL_FILE = `${process.env.DOMAIN}/api/file/`;
const SERVER_PORT = process.env.SERVER_PORT;
const UPLOAD_LOCATION = config_1.default.get('upload.location');
const ACCESS_SECRET = config_1.default.get('token.secret.access');
const REFRESH_SECRET = config_1.default.get('token.secret.refresh');
const SESSION_SALT = config_1.default.get('token.salt');
const REDIS_HOST = process.env.REDIS_HOST || 'cache';
const DATABASE_HOST = process.env.DATABASE_HOST || 'database';
const DATABASE_PORT = +(process.env.DATABASE_PORT || '5432');
const DATABASE_USER = process.env.DATABASE_USER || 'root';
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'admin';
const DATABASE_NAME = process.env.DATABASE_NAME || 'postgres';
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = +(process.env.SMTP_PORT || '0');
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const MAIL_SENDER = process.env.MAIL_SENDER;
const smtpSecureAsString = process.env.SMTP_SECURE;
const SMTP_SECURE = smtpSecureAsString ? smtpSecureAsString.toLowerCase() === 'true' : true;
const ID_TOKEN_PRIVATE_KEY_AS_BASE64 = process.env.ID_TOKEN_PRIVATE_KEY_AS_BASE64;
const ID_TOKEN_PRIVATE_KEY = ID_TOKEN_PRIVATE_KEY_AS_BASE64;
const ID_TOKEN_PUBLIC_KEY_AS_BASE64 = process.env.ID_TOKEN_PUBLIC_KEY_AS_BASE64;
const ID_TOKEN_PUBLIC_KEY = ID_TOKEN_PUBLIC_KEY_AS_BASE64;
exports.appConfig = {
    NODE_ENV,
    LOG_LEVEL_CONSOLE,
    LOG_LEVEL_FILE,
    DOMAIN_FE,
    DOMAIN,
    URL_FILE,
    SERVER_PORT,
    UPLOAD_LOCATION,
    ACCESS_SECRET,
    REFRESH_SECRET,
    SESSION_SALT,
    REDIS_HOST,
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_NAME,
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASSWORD,
    SMTP_SECURE,
    MAIL_SENDER,
    ID_TOKEN_PRIVATE_KEY,
    ID_TOKEN_PUBLIC_KEY_AS_BASE64,
    ID_TOKEN_PUBLIC_KEY,
};
//# sourceMappingURL=config.js.map