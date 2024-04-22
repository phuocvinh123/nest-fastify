"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailerOptions = exports.mailerTransportOptions = void 0;
const config_1 = require("./config");
exports.mailerTransportOptions = {
    host: config_1.appConfig.SMTP_HOST,
    port: config_1.appConfig.SMTP_PORT,
    secure: false,
    auth: {
        user: config_1.appConfig.SMTP_USER,
        pass: config_1.appConfig.SMTP_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
    },
};
exports.mailerOptions = {
    transport: exports.mailerTransportOptions,
    defaults: {
        from: config_1.appConfig.MAIL_SENDER,
    },
    template: {
        dir: './other/templates',
        options: {
            strict: true,
        },
    },
};
//# sourceMappingURL=mailer.config.js.map