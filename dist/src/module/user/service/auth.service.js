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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = exports.P_AUTH_DELETE_IMAGE_TEMP = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const argon2 = __importStar(require("argon2"));
const aws_sdk_1 = require("aws-sdk");
const nestjs_i18n_1 = require("nestjs-i18n");
const mime_types_1 = __importDefault(require("mime-types"));
const non_secure_1 = require("nanoid/non-secure");
const _shared_1 = require("../../../shared");
const _service_1 = require("../../../service");
const _repository_1 = require("../../../repository");
const _config_1 = require("../../../config");
const cron_1 = require("cron");
const schedule_1 = require("@nestjs/schedule");
exports.P_AUTH_DELETE_IMAGE_TEMP = '11cc566b-b109-49f8-983f-84ff08f9849e';
let AuthService = class AuthService extends _shared_1.BaseService {
    constructor(repo, jwtService, emailService, schedulerRegistry) {
        super(repo);
        this.repo = repo;
        this.jwtService = jwtService;
        this.emailService = emailService;
        this.schedulerRegistry = schedulerRegistry;
    }
    async updateRefreshToken(userId, refreshToken) {
        await this.update(userId, { refreshToken });
    }
    async getTokens(user, returnRefresh = true) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync({ userId: user.id, email: user.email }, { secret: _config_1.appConfig.ACCESS_SECRET, expiresIn: '30m' }),
            returnRefresh
                ? this.jwtService.signAsync({ userId: user.id, email: user.email }, { secret: _config_1.appConfig.REFRESH_SECRET, expiresIn: '1d' })
                : '',
        ]);
        if (returnRefresh)
            await this.updateRefreshToken(user.id, refreshToken);
        return { accessToken, refreshToken };
    }
    async logout(user) {
        return await this.update(user.id, { refreshToken: null });
    }
    async forgottenPassword(body) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        const user = await this.repo.getDataByEmail(body.email);
        if (!user)
            throw new common_1.BadRequestException(i18n.t('common.Auth.Invalid email'));
        user.otp = (0, non_secure_1.customAlphabet)('0123456789', 10)(6);
        await this.update(user.id, user);
        const name = user.id + 'forgottenPassword';
        if (this.schedulerRegistry.doesExist('cron', name))
            this.schedulerRegistry.deleteCronJob(name);
        const job = new cron_1.CronJob(`0 */5 * * * *`, () => {
            this.update(user.id, { otp: null });
            this.schedulerRegistry.deleteCronJob(name);
        });
        this.schedulerRegistry.addCronJob(name, job);
        job.start();
        return user.otp;
    }
    async OTPConfirmation(body) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        const user = await this.repo.getDataByEmailAndOTP(body.email, body.otp);
        if (!user)
            throw new common_1.BadRequestException(i18n.t('common.Auth.Invalid email'));
        return user;
    }
    async sendMailContact(body) {
        await this.emailService.sendUserContact(body);
        return true;
    }
    async resetPassword({ email, otp, ...body }) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        const user = await this.OTPConfirmation({ email, otp });
        if (body.password === body.retypedPassword)
            await this.update(user.id, { password: body.password, otp: null });
        else
            throw new common_1.UnauthorizedException(i18n.t('common.Auth.Password do not match'));
        const name = user.id + 'forgottenPassword';
        if (this.schedulerRegistry.doesExist('cron', name))
            this.schedulerRegistry.deleteCronJob(name);
        return true;
    }
    async login(body) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        const user = await this.repo.getDataByEmailJoin(body.email);
        if (!user)
            throw new common_1.UnauthorizedException(i18n.t('common.Auth.User not found', { args: { email: body.email } }));
        if (!(await argon2.verify(user.password, body.password)))
            throw new common_1.UnauthorizedException(i18n.t('common.Auth.Invalid credentials for user', { args: { email: body.email } }));
        return user;
    }
    async register(body) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        if (body.password !== body.retypedPassword)
            throw new common_1.BadRequestException(i18n.t('common.Auth.Passwords are not identical'));
        const existingUser = await this.repo.getDataByEmail(body.email);
        if (existingUser)
            throw new common_1.BadRequestException(i18n.t('common.Auth.Email is already taken'));
        const user = this.repo.create(body);
        const data = await this.repo.save(user);
        return data;
    }
    async download(name, res) {
        try {
            new aws_sdk_1.S3({
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                region: 'ap-southeast-1',
            }).getObject({
                Bucket: process.env.AWS_ACCESS_BUCKET_NAME || '',
                Key: name,
            }, (err, data) => {
                if (err)
                    console.log(err.message);
                if (data) {
                    const buffer = Buffer.from(data.Body);
                    res.headers({ 'Content-Type': mime_types_1.default.lookup(name) });
                    res.send(buffer);
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_repository_1.UserRepository,
        jwt_1.JwtService,
        _service_1.EmailService,
        schedule_1.SchedulerRegistry])
], AuthService);
//# sourceMappingURL=auth.service.js.map