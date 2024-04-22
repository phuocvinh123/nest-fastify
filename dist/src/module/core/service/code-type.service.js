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
exports.CodeTypeService = exports.P_CODE_TYPE_DELETE = exports.P_CODE_TYPE_UPDATE = exports.P_CODE_TYPE_CREATE = exports.P_CODE_TYPE_DETAIL = exports.P_CODE_TYPE_LISTED = void 0;
const common_1 = require("@nestjs/common");
const _repository_1 = require("../../../repository");
const _shared_1 = require("../../../shared");
exports.P_CODE_TYPE_LISTED = '2a71d57d-7c2d-49ad-a7e9-3cd4aace132f';
exports.P_CODE_TYPE_DETAIL = '7af26c77-e81f-4875-89df-9d4c2fa3ce52';
exports.P_CODE_TYPE_CREATE = '45f014c0-9ebe-497e-9766-2054ebb7e1d5';
exports.P_CODE_TYPE_UPDATE = 'fdb47b79-1a6e-49be-8f5b-8525a547534a';
exports.P_CODE_TYPE_DELETE = 'f16e2bc7-12b9-446e-b53b-a2597ca0ad3a';
let CodeTypeService = class CodeTypeService extends _shared_1.BaseService {
    constructor(repo) {
        super(repo);
        this.repo = repo;
        this.listJoin = ['items'];
    }
    async findOneCode(code, i18n) {
        const data = await this.repo.getDataByCodeJoinItems(code);
        if (!data)
            throw new common_1.BadRequestException(i18n.t('common.Data id not found', { args: { id: code } }));
        return data;
    }
};
exports.CodeTypeService = CodeTypeService;
exports.CodeTypeService = CodeTypeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_repository_1.CodeTypeRepository])
], CodeTypeService);
//# sourceMappingURL=code-type.service.js.map