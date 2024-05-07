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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const _shared_1 = require("../../../shared");
const _dto_1 = require("../../../dto");
const _model_1 = require("../../../model");
const _service_1 = require("../../../service");
const argon2 = __importStar(require("argon2"));
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(i18n, createUserDto) {
        return {
            message: i18n.t('common.Success'),
            data: await this.authService.register(createUserDto),
        };
    }
    async login(i18n, loginAuthDto) {
        const user = await this.authService.login(loginAuthDto);
        const tokens = await this.authService.getTokens(user, true);
        return {
            message: i18n.t('common.Success'),
            data: {
                ...tokens,
                user: user,
            },
        };
    }
    async getProfile(i18n, user) {
        return {
            message: i18n.t('common.Success'),
            data: user,
        };
    }
    async updateProfile(i18n, user, updateData) {
        const { password, ...body } = updateData;
        const newUser = await this.authService.update(user.id, body, async (data) => {
            if (updateData.passwordOld &&
                (!(await argon2.verify(data.password, updateData.passwordOld)) || password !== updateData.retypedPassword))
                throw new common_1.BadRequestException(i18n.t('common.Auth.Passwords are not identical'));
            if (updateData.passwordOld)
                data.password = password;
            return data;
        });
        const tokens = await this.authService.getTokens(newUser, true);
        return {
            message: i18n.t('common.Success'),
            data: {
                ...tokens,
                user: newUser,
            },
        };
    }
    async refreshTokens(i18n, user) {
        return {
            message: i18n.t('common.Success'),
            data: (await this.authService.getTokens(user, false)),
        };
    }
    async forgottenPassword(i18n, body) {
        const otp = await this.authService.forgottenPassword(body);
        return {
            message: i18n.t('common.Success'),
            data: otp,
        };
    }
    async OTPConfirmation(i18n, body) {
        await this.authService.OTPConfirmation(body);
        return {
            message: i18n.t('common.Success'),
            data: !!(await this.authService.OTPConfirmation(body)),
        };
    }
    async resetPassword(i18n, body) {
        await this.authService.resetPassword(body);
        return {
            message: i18n.t('common.Success'),
        };
    }
    async logout(i18n, user) {
        await this.authService.logout(user);
        return {
            message: i18n.t('common.Success'),
            data: null,
        };
    }
    async sendEmailContact(i18n, body) {
        await this.authService.sendMailContact(body);
        return {
            message: i18n.t('common.Success'),
        };
    }
    async download(name, res) {
        return await this.authService.download(name, res);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, _shared_1.Public)({
        summary: 'Register',
        serializeOptions: { groups: [_shared_1.MaxGroup] },
    }),
    (0, common_1.Post)('register'),
    openapi.ApiResponse({ status: 201, type: require("../dto/user.dto").ProfileAuthResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Body)(new _shared_1.SerializerBody([_shared_1.MaxGroup, _shared_1.OnlyUpdateGroup]))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext,
        _dto_1.RegisterAuthRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, _shared_1.Public)({
        summary: 'Login',
        serializeOptions: { groups: [_shared_1.MaxGroup] },
    }),
    (0, common_1.Post)('login'),
    openapi.ApiResponse({ status: 201, type: require("../dto/user.dto").DefaultAuthResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Body)(new _shared_1.SerializerBody([_shared_1.MaxGroup, _shared_1.OnlyUpdateGroup]))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext,
        _dto_1.LoginAuthRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, _shared_1.Auth)({
        summary: 'My Profile',
        serializeOptions: { groups: [_shared_1.MaxGroup] },
    }),
    openapi.ApiResponse({ status: 200, type: require("../dto/user.dto").UserResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, _shared_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, _model_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Put)('profile'),
    (0, _shared_1.Auth)({
        summary: 'Update my Profile',
        serializeOptions: { groups: [_shared_1.MaxGroup] },
    }),
    openapi.ApiResponse({ status: 200, type: require("../dto/user.dto").DefaultAuthResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, _shared_1.AuthUser)()),
    __param(2, (0, common_1.Body)(new _shared_1.SerializerBody([_shared_1.MaxGroup, _shared_1.OnlyUpdateGroup]))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext,
        _model_1.User,
        _dto_1.ProfileAuthRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Get)('refresh-token'),
    (0, _shared_1.Auth)({
        summary: 'Refresh Token',
        tokenGuard: _shared_1.RefreshTokenGuard,
    }),
    openapi.ApiResponse({ status: 200, type: require("../dto/user.dto").DefaultAuthResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, _shared_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, _model_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokens", null);
__decorate([
    (0, _shared_1.Public)({
        summary: 'Forgotten password',
    }),
    (0, common_1.Post)('forgotten-password'),
    openapi.ApiResponse({ status: 201, type: require("../dto/user.dto").DefaultForgottenPasswordResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Body)(new _shared_1.SerializerBody())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext,
        _dto_1.ForgottenPasswordAuthRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgottenPassword", null);
__decorate([
    (0, _shared_1.Public)({
        summary: 'OTP confirmation',
    }),
    (0, common_1.Post)('otp-confirmation'),
    openapi.ApiResponse({ status: 201, type: require("../dto/user.dto").DefaultForgottenPasswordResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Body)(new _shared_1.SerializerBody())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext,
        _dto_1.OTPConfirmationAuthRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "OTPConfirmation", null);
__decorate([
    (0, _shared_1.Public)({
        summary: 'Reset password',
        serializeOptions: { groups: [_shared_1.OnlyUpdateGroup] },
    }),
    (0, common_1.Post)('reset-password'),
    openapi.ApiResponse({ status: 201, type: require("../../../shared/base/base.dto").DefaultResponsesDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Body)(new _shared_1.SerializerBody([_shared_1.OnlyUpdateGroup]))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext,
        _dto_1.RestPasswordAuthRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Get)('logout'),
    (0, _shared_1.Auth)({
        summary: 'Logout',
    }),
    openapi.ApiResponse({ status: 200, type: require("../dto/user.dto").UserResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, _shared_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, _model_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, _shared_1.Public)({
        summary: 'Send email Contact',
    }),
    (0, common_1.Post)('send-email-contact'),
    openapi.ApiResponse({ status: 201, type: require("../../../shared/base/base.dto").DefaultResponsesDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Body)(new _shared_1.SerializerBody([_shared_1.MaxGroup]))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext,
        _dto_1.ContactRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendEmailContact", null);
__decorate([
    (0, _shared_1.Public)({
        summary: 'Download',
    }),
    (0, common_1.Get)('download'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('key')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "download", null);
exports.AuthController = AuthController = __decorate([
    (0, _shared_1.Headers)('auth'),
    __metadata("design:paramtypes", [_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map