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
exports.AddressProvinceController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const _shared_1 = require("../../../shared");
const _service_1 = require("../../../service");
let AddressProvinceController = class AddressProvinceController {
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
};
exports.AddressProvinceController = AddressProvinceController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("../dto/address-province.dto").ListProvinceResponseDto }),
    __param(0, (0, nestjs_i18n_1.I18n)()),
    __param(1, (0, common_1.Query)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext,
        _shared_1.PaginationQueryDto]),
    __metadata("design:returntype", Promise)
], AddressProvinceController.prototype, "findAll", null);
exports.AddressProvinceController = AddressProvinceController = __decorate([
    (0, _shared_1.Headers)('address/province'),
    __metadata("design:paramtypes", [_service_1.AddressProvinceService])
], AddressProvinceController);
//# sourceMappingURL=address-province.controller.js.map