"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = __importDefault(require("@fastify/helmet"));
const multipart_1 = __importDefault(require("@fastify/multipart"));
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const secure_session_1 = __importDefault(require("@fastify/secure-session"));
const nest_winston_1 = require("nest-winston");
const path_1 = require("path");
const hbs_1 = __importDefault(require("hbs"));
const hbs_utils_1 = __importDefault(require("hbs-utils"));
const _config_1 = require("./config");
const _shared_1 = require("./shared");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const logger = new common_1.Logger('bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter(), {
        logger: nest_winston_1.WinstonModule.createLogger(_config_1.loggerOptions),
        cors: true,
    });
    app.useLogger(app.get(nest_winston_1.WINSTON_MODULE_NEST_PROVIDER));
    await app.register(helmet_1.default, { crossOriginResourcePolicy: false, contentSecurityPolicy: false });
    const options = {
        limits: {
            fieldNameSize: 100,
            fieldSize: 1000000,
            fields: 10,
            fileSize: 100000000,
            files: 1,
            headerPairs: 2000,
        },
    };
    await app.register(multipart_1.default, options);
    app.useGlobalFilters(new _shared_1.HttpExceptionFilter());
    app.enableShutdownHooks();
    await app.register(secure_session_1.default, { secret: _config_1.appConfig.ACCESS_SECRET, salt: _config_1.appConfig.SESSION_SALT });
    app.useStaticAssets({ root: (0, path_1.join)(process.cwd(), './other', 'public') });
    hbs_1.default.registerPartials((0, path_1.join)(process.cwd(), './other', '/views/layouts'));
    hbs_1.default.registerPartials((0, path_1.join)(process.cwd(), './other', '/views/partials'));
    hbs_1.default.registerPartials((0, path_1.join)(process.cwd(), './other', '/views/pages'));
    hbs_1.default.registerHelper('json', function (context) {
        return JSON.stringify(context);
    });
    hbs_1.default.registerHelper('raw-helper', function (options) {
        return options.fn();
    });
    hbs_1.default.registerHelper('priceOfDiscount', function (price, discount) {
        return Math.round(price - (price * discount) / 100);
    });
    hbs_1.default.registerHelper('formatCurrency', function (price, currency) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency }).format(price);
    });
    (0, hbs_utils_1.default)(hbs_1.default).registerWatchedPartials((0, path_1.join)(process.cwd(), './other', '/views/layouts'));
    (0, hbs_utils_1.default)(hbs_1.default).registerWatchedPartials((0, path_1.join)(process.cwd(), './other', '/views/pages'));
    (0, hbs_utils_1.default)(hbs_1.default).registerWatchedPartials((0, path_1.join)(process.cwd(), './other', '/views/partials'));
    app.setViewEngine({
        engine: { handlebars: hbs_1.default },
        includeViewExtension: true,
        templates: (0, path_1.join)(process.cwd(), './other', 'views'),
    });
    const port = _config_1.appConfig.SERVER_PORT;
    if (!port) {
        logger.error('Server Port is undefined');
        return;
    }
    if (_config_1.appConfig.NODE_ENV !== 'prod')
        (0, _config_1.setupSwagger)(app);
    await app.listen(port, '0.0.0.0');
    logger.verbose(`Application running on port ${port}, NODE_ENV: ${_config_1.appConfig.NODE_ENV}`);
}
bootstrap();
//# sourceMappingURL=main.js.map