"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const _config_1 = require("../src/config");
const main_seeder_1 = require("./main.seeder");
const _shared_1 = require("../src/shared");
const options = {
    type: 'postgres',
    host: _config_1.appConfig.DATABASE_HOST,
    port: _config_1.appConfig.DATABASE_PORT,
    username: _config_1.appConfig.DATABASE_USER,
    password: _config_1.appConfig.DATABASE_PASSWORD,
    database: _config_1.appConfig.NODE_ENV !== 'test' ? _config_1.appConfig.DATABASE_NAME : 'postgres',
    entities: ['src/**/*.{entity,model}.{js,ts}'],
    migrations: ['database/migrations/**/*{.ts,.js}'],
    seeds: [main_seeder_1.MainSeeder],
    factories: ['database/factories/**/*{.ts,.js}'],
    logging: ['error'],
    logger: _config_1.appConfig.NODE_ENV !== 'prod' ? 'advanced-console' : new _config_1.DbCustomLogger(),
    namingStrategy: new _shared_1.NamingStrategy(),
};
exports.AppDataSource = new typeorm_1.DataSource(options);
//# sourceMappingURL=data-source.js.map