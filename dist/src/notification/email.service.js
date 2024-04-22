"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const _config_1 = require("../config");
let EmailService = class EmailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
        this.logger = new common_1.Logger('EmailService');
    }
    async sendUserConfirmation(user, token) {
        try {
            const info = await this.mailerService.sendMail({
                to: user.email,
                from: '"ARI TECHNOLOGY" <' + _config_1.appConfig.MAIL_SENDER + '>',
                subject: 'Welcome to Ari! We got a request to Reset Password',
                template: './confirmation',
                context: {
                    name: user.name,
                    token: token,
                },
            });
            this.logger.verbose(`Response Send email: ${JSON.stringify(info)}`);
            return info;
        }
        catch (error) {
            this.logger.error(`Failed to send reset password email to ${user.email}`, error.stack);
        }
    }
    async sendUserContact(context) {
        try {
            const info = await this.mailerService.sendMail({
                to: _config_1.appConfig.MAIL_SENDER,
                from: '"ARI TECHNOLOGY" <' + _config_1.appConfig.MAIL_SENDER + '>',
                subject: 'We got a request to Contact',
                template: './contact',
                context,
            });
            this.logger.verbose(`Response Send email: ${JSON.stringify(info)}`);
            return info;
        }
        catch (error) {
            this.logger.error(`Failed to send temporary password email to ${_config_1.appConfig.MAIL_SENDER}`, error.stack);
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], EmailService);
//# sourceMappingURL=email.service.js.map