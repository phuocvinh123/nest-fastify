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
exports.ParameterService = exports.P_PARAMETER_DELETE = exports.P_PARAMETER_UPDATE = exports.P_PARAMETER_CREATE = exports.P_PARAMETER_LISTED = void 0;
const common_1 = require("@nestjs/common");
const _repository_1 = require("../../../repository");
const _shared_1 = require("../../../shared");
exports.P_PARAMETER_LISTED = 'd278abcb-1956-4b45-95c1-2ab612110ec6';
exports.P_PARAMETER_CREATE = 'd9185449-e2ac-4e72-9c9f-25788c23d5ba';
exports.P_PARAMETER_UPDATE = '3d478437-949b-4ae7-9c21-79cabb1663a3';
exports.P_PARAMETER_DELETE = '275ebda7-3e03-4c93-b352-baa7705528aa';
let ParameterService = class ParameterService extends _shared_1.BaseService {
    constructor(repo) {
        super(repo);
        this.repo = repo;
        this.listQuery = ['name'];
    }
    async findOne(code) {
        return this.repo.getDataByCode(code);
    }
};
exports.ParameterService = ParameterService;
exports.ParameterService = ParameterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_repository_1.ParameterRepository])
], ParameterService);
//# sourceMappingURL=parameter.service.js.map