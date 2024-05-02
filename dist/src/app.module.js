"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const path_1 = require("path");
const nestjs_i18n_1 = require("nestjs-i18n");
const typeorm_1 = require("@nestjs/typeorm");
const cache_manager_1 = require("@nestjs/cache-manager");
const cache_manager_redis_yet_1 = require("cache-manager-redis-yet");
const _controller_1 = require("./controller");
const _config_1 = require("./config");
const _module_1 = require("./module");
const _shared_1 = require("./shared");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [_controller_1.AppController],
        imports: [
            nest_winston_1.WinstonModule.forRoot(_config_1.loggerOptions),
            _module_1.SchedulerModule,
            _module_1.UserModule,
            _module_1.CoreModule,
            nestjs_i18n_1.I18nModule.forRootAsync({
                useFactory: () => ({
                    fallbackLanguage: 'vn',
                    loaderOptions: {
                        path: (0, path_1.resolve)('./other/translations'),
                        watch: _config_1.appConfig.NODE_ENV !== 'prod',
                    },
                    viewEngine: 'hbs',
                }),
                resolvers: [nestjs_i18n_1.AcceptLanguageResolver],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => ({
                    type: 'postgres',
                    host: _config_1.appConfig.DATABASE_HOST,
                    port: _config_1.appConfig.DATABASE_PORT,
                    username: _config_1.appConfig.DATABASE_USER,
                    password: _config_1.appConfig.DATABASE_PASSWORD,
                    database: _config_1.appConfig.NODE_ENV !== 'test' ? _config_1.appConfig.DATABASE_NAME : 'postgres',
                    autoLoadEntities: true,
                    entities: [__dirname + '/**/*.{entity,model}.{js,ts}'],
                    synchronize: _config_1.appConfig.NODE_ENV !== 'prod',
                    logging: ['error'],
                    logger: _config_1.appConfig.NODE_ENV !== 'prod' ? 'advanced-console' : new _config_1.DbCustomLogger(),
                    namingStrategy: new _shared_1.NamingStrategy(),
                }),
            }),
            cache_manager_1.CacheModule.registerAsync({
                useFactory: async () => ({
                    store: await (0, cache_manager_redis_yet_1.redisStore)({
                        socket: {
                            host: _config_1.appConfig.REDIS_HOST,
                            port: 6379,
                        },
                        ttl: 3600 * 1000,
                    }),
                }),
                isGlobal: true,
            }),
            _module_1.ProductModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map