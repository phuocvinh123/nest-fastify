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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const dayjs_1 = __importDefault(require("dayjs"));
const _dto_1 = require("../../../dto");
const _shared_1 = require("../../../shared");
const _service_1 = require("../../../service");
let UserController = class UserController {
    constructor(service) {
        this.service = service;
    }
    async findAll(i18n, paginationQuery) {
        const [result, total] = await this.service.findAll(paginationQuery);
        return {
            message: i18n.t('common.Get List Success'),
            count: total,
            data: result,
        };
    }
    async findOne(i18n, id) {
        return {
            message: i18n.t('common.Get Detail Success'),
            data: await this.service.findOne(id, []),
        };
    }
    async create(i18n, createData) {
        return {
            message: i18n.t('common.Create Success'),
            data: await this.service.create(createData),
        };
    }
    async update(i18n, id, updateData) {
        return {
            message: i18n.t('common.Update Success'),
            data: await this.service.update(id, updateData, async (data) => {
                delete data.password;
                return data;
            }),
        };
    }
    async updateDisable(i18n, id, boolean) {
        return {
            message: i18n.t('common.Update Success'),
            data: await this.service.update(id, { isDisabled: boolean === 'true' ? (0, dayjs_1.default)().toDate() : null }),
        };
    }
    async remove(i18n, id) {
        return {
            message: i18n.t('common.Delete Success'),
            data: await this.service.remove(id),
        };
    }
};
exports.UserController = UserController;
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Get List User',
        permission: _service_1.P_USER_LISTED,
    }),
    (0, common_1.Get)(''),
    openapi.ApiResponse({ status: 200, type: require("../dto/user.dto").ListUserResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, _shared_1.PaginationQueryDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Get Detail User',
        permission: _service_1.P_USER_DETAIL,
        serializeOptions: { groups: [_shared_1.MaxGroup] },
    }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../dto/user.dto").UserResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Create User',
        permission: _service_1.P_USER_CREATE,
        serializeOptions: { groups: [_shared_1.MaxGroup] },
    }),
    (0, common_1.Post)(''),
    openapi.ApiResponse({ status: 201, type: require("../dto/user.dto").UserResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Body)(new _shared_1.SerializerBody([_shared_1.MaxGroup, _shared_1.OnlyUpdateGroup]))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext,
        _dto_1.CreateUserRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Update User',
        permission: _service_1.P_USER_UPDATE,
        serializeOptions: { groups: [_shared_1.MaxGroup] },
    }),
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../dto/user.dto").UserResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)(new _shared_1.SerializerBody([_shared_1.MaxGroup]))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, String, _dto_1.UpdateUserRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Update disable',
        permission: _service_1.P_USER_UPDATE,
    }),
    (0, common_1.Put)(':id/disable/:boolean'),
    openapi.ApiResponse({ status: 200, type: require("../dto/user.dto").UserResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('boolean')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateDisable", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Delete User',
        permission: _service_1.P_USER_DELETE,
        serializeOptions: { groups: [_shared_1.MaxGroup] },
    }),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../dto/user.dto").UserResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
exports.UserController = UserController = __decorate([
    (0, _shared_1.Headers)('user'),
    __metadata("design:paramtypes", [_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map