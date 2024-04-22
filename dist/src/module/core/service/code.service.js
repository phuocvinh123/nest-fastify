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
exports.CodeService = exports.P_CODE_DELETE = exports.P_CODE_UPDATE = exports.P_CODE_CREATE = exports.P_CODE_DETAIL = exports.P_CODE_LISTED = void 0;
const common_1 = require("@nestjs/common");
const _shared_1 = require("../../../shared");
const _repository_1 = require("../../../repository");
exports.P_CODE_LISTED = '5d808d76-bf99-4a51-b4b6-d5aa37bdb398';
exports.P_CODE_DETAIL = 'eb510a79-4f75-4b14-a118-f036c1daa430';
exports.P_CODE_CREATE = 'a9574d5e-269d-44f9-a5bb-41cf06d7bdda';
exports.P_CODE_UPDATE = '6d34b679-9c0e-489a-a2de-a17e37fadf72';
exports.P_CODE_DELETE = 'e21ac25b-1651-443e-9834-e593789807c9';
let CodeService = class CodeService extends _shared_1.BaseService {
    constructor(repo) {
        super(repo);
        this.repo = repo;
        this.listQuery = ['code', 'name', 'description'];
    }
};
exports.CodeService = CodeService;
exports.CodeService = CodeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_repository_1.CodeRepository])
], CodeService);
//# sourceMappingURL=code.service.js.map