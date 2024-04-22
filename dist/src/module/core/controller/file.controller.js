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
exports.FileController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const path_1 = require("path");
const mime_types_1 = __importDefault(require("mime-types"));
const nestjs_i18n_1 = require("nestjs-i18n");
const fs_1 = require("fs");
const _config_1 = require("../../../config");
const _model_1 = require("../../../model");
const _service_1 = require("../../../service");
const _shared_1 = require("../../../shared");
let FileController = class FileController {
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
    async create(i18n, req, user) {
        const file = await req.file();
        if (!file)
            new common_1.BadRequestException(i18n.t('common.Data id not found'));
        return {
            message: i18n.t('common.Create Success'),
            data: await this.service.uploadFile(user.id, file),
        };
    }
    async stream(userId, name, res) {
        const filePath = (0, path_1.join)(process.cwd(), _config_1.appConfig.UPLOAD_LOCATION, `${userId}/${name}`);
        if (!(0, fs_1.existsSync)(filePath))
            throw new common_1.BadRequestException();
        const { size } = (0, fs_1.statSync)(filePath);
        const contentType = mime_types_1.default.contentType(filePath.split('.').pop());
        const header = {
            'Content-Type': contentType,
            'Content-Length': size,
        };
        if (contentType.includes('video')) {
        }
        else {
            res.headers(header);
            const file = (0, fs_1.createReadStream)(filePath);
            return new common_1.StreamableFile(file);
        }
    }
    async remove(i18n, url) {
        return {
            message: i18n.t('common.Delete Success'),
            data: await this.service.removeHard(url),
        };
    }
};
exports.FileController = FileController;
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Get List data',
        permission: _service_1.P_FILE_LISTED,
    }),
    (0, common_1.Get)(''),
    openapi.ApiResponse({ status: 200, type: require("../dto/file.dto").ListFileResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Query)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext,
        _shared_1.PaginationQueryDto]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "findAll", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'File image',
        permission: _service_1.P_FILE_CREATE,
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, common_1.Post)(''),
    openapi.ApiResponse({ status: 201, type: require("../dto/file.dto").FileResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, _shared_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, Object, _model_1.User]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "create", null);
__decorate([
    (0, _shared_1.Public)({
        summary: 'View file',
    }),
    (0, common_1.Get)('/:userId/:name'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('name')),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "stream", null);
__decorate([
    (0, _shared_1.Auth)({
        summary: 'Delete data',
        permission: _service_1.P_FILE_DELETE,
    }),
    (0, common_1.Delete)(':url'),
    openapi.ApiResponse({ status: 200, type: require("../dto/file.dto").FileResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Param)('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext, String]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "remove", null);
exports.FileController = FileController = __decorate([
    (0, _shared_1.Headers)('file'),
    __metadata("design:paramtypes", [_service_1.FileService])
], FileController);
//# sourceMappingURL=file.controller.js.map