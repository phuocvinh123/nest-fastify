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
exports.CodeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const dayjs_1 = __importDefault(require("dayjs"));
const _shared_1 = require("../../../shared");
const _dto_1 = require("../../../dto");
const _service_1 = require("../../../service");
let CodeController = class CodeController {
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
    async create(i18n, body) {
        return {
            message: i18n.t('common.Create Success'),
            data: await this.service.create(body),
        };
    }
    async update(i18n, id, body) {
        return {
            message: i18n.t('common.Update Success'),
            data: await this.service.update(id, body),
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
            data: await this.service.removeHard(id),
        };
    }
};
exports.CodeController = CodeController;
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Get List data',
        permission: _service_1.P_CODE_LISTED,
    }),
    (0, common_1.Get)(''),
    openapi.ApiResponse({ status: 200, type: require("../dto/code.dto").ListCodeResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Query)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext,
        _shared_1.PaginationQueryDto]),
    __metadata("design:returntype", Promise)
], CodeController.prototype, "findAll", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Get Detail data',
        permission: _service_1.P_CODE_DETAIL,
    }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../dto/code.dto").CodeRelationshipResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, String]),
    __metadata("design:returntype", Promise)
], CodeController.prototype, "findOne", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Create data',
        permission: _service_1.P_CODE_CREATE,
    }),
    (0, common_1.Post)(''),
    openapi.ApiResponse({ status: 201, type: require("../dto/code.dto").CodeResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Body)(new _shared_1.SerializerBody())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext,
        _dto_1.CreateCodeRequestDto]),
    __metadata("design:returntype", Promise)
], CodeController.prototype, "create", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Update data',
        permission: _service_1.P_CODE_UPDATE,
    }),
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../dto/code.dto").CodeResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)(new _shared_1.SerializerBody())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, String, _dto_1.UpdateCodeRequestDto]),
    __metadata("design:returntype", Promise)
], CodeController.prototype, "update", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Update disable',
        permission: _service_1.P_CODE_UPDATE,
    }),
    (0, common_1.Put)(':id/disable/:boolean'),
    openapi.ApiResponse({ status: 200, type: require("../dto/code.dto").CodeResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('boolean')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, String, String]),
    __metadata("design:returntype", Promise)
], CodeController.prototype, "updateDisable", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Delete data',
        permission: _service_1.P_CODE_DELETE,
    }),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../dto/code.dto").CodeResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, String]),
    __metadata("design:returntype", Promise)
], CodeController.prototype, "remove", null);
exports.CodeController = CodeController = __decorate([
    (0, _shared_1.Headers)('code'),
    __metadata("design:paramtypes", [_service_1.CodeService])
], CodeController);
//# sourceMappingURL=code.controller.js.map