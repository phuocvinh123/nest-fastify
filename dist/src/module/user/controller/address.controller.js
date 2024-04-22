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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const _shared_1 = require("../../../shared");
const _dto_1 = require("../../../dto");
const _service_1 = require("../../../service");
const _model_1 = require("../../../model");
let AddressController = class AddressController {
    constructor(service) {
        this.service = service;
    }
    async findAll(i18n, user, paginationQuery) {
        if (user.roleCode !== 'supper_admin')
            paginationQuery.where = [{ userId: user.id }];
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
    async create(user, i18n, body) {
        const data = Object.assign(body, { userId: user.id });
        return {
            message: i18n.t('common.Create Success'),
            data: await this.service.create(data),
        };
    }
    async update(i18n, id, body) {
        return {
            message: i18n.t('common.Update Success'),
            data: await this.service.update(id, body),
        };
    }
    async remove(i18n, id) {
        return {
            message: i18n.t('common.Delete Success'),
            data: await this.service.remove(id),
        };
    }
};
exports.AddressController = AddressController;
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Get List Address',
        serializeOptions: { groups: [_shared_1.MaxGroup] },
    }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("../dto/address.dto").ListAddressResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, _shared_1.AuthUser)()),
    __param(2, (0, common_1.Query)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext,
        _model_1.User,
        _shared_1.PaginationQueryDto]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "findAll", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Get Detail Address',
        serializeOptions: { groups: [_shared_1.MaxGroup] },
    }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../dto/address.dto").AddressResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, String]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "findOne", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Create Address',
        serializeOptions: { groups: [_shared_1.MaxGroup] },
    }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../dto/address.dto").AddressResponseDto }),
    __param(0, (0, _shared_1.AuthUser)()),
    __param(1, (0, nestjs_i18n_1.I18n)()),
    __param(2, (0, common_1.Body)(new _shared_1.SerializerBody([_shared_1.MaxGroup]))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_model_1.User,
        nestjs_i18n_1.I18nContext,
        _dto_1.CreateAddressRequestDto]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "create", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Update Address',
        serializeOptions: { groups: [_shared_1.MaxGroup] },
    }),
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../dto/address.dto").AddressResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)(new _shared_1.SerializerBody())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, String, _dto_1.UpdateAddressRequestDto]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "update", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Delete Address',
        serializeOptions: { groups: [_shared_1.MaxGroup] },
    }),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../dto/address.dto").AddressResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, String]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "remove", null);
exports.AddressController = AddressController = __decorate([
    (0, _shared_1.Headers)('address'),
    __metadata("design:paramtypes", [_service_1.AddressService])
], AddressController);
//# sourceMappingURL=address.controller.js.map