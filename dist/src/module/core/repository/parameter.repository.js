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
exports.ParameterRepository = void 0;
const common_1 = require("@nestjs/common");
const _shared_1 = require("../../../shared");
const _model_1 = require("../../../model");
const typeorm_1 = require("typeorm");
let ParameterRepository = class ParameterRepository extends _shared_1.BaseRepository {
    constructor(dataSource) {
        super(_model_1.Parameter, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async getDataByCode(code) {
        return await this.createQueryBuilder('base')
            .where(`base.code=:code`, { code })
            .addOrderBy('base.createdAt', 'ASC')
            .withDeleted()
            .getOne();
    }
};
exports.ParameterRepository = ParameterRepository;
exports.ParameterRepository = ParameterRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ParameterRepository);
//# sourceMappingURL=parameter.repository.js.map