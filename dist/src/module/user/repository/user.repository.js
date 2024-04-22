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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const _model_1 = require("../../../model");
const _shared_1 = require("../../../shared");
let UserRepository = class UserRepository extends _shared_1.BaseRepository {
    constructor(dataSource) {
        super(_model_1.User, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async getDataByIdAndEmail(id, email) {
        return await this.createQueryBuilder('base')
            .andWhere('base.id=:id', { id })
            .andWhere('base.email=:email', { email })
            .getOne();
    }
    async getDataByIdAndEmailJoinRole(id, email) {
        return await this.createQueryBuilder('base')
            .andWhere('base.id=:id', { id })
            .andWhere('base.email=:email', { email })
            .leftJoinAndSelect('base.role', 'role')
            .leftJoinAndSelect('base.position', 'position')
            .getOne();
    }
    async getDataByEmailAndOTP(email, otp) {
        return await this.createQueryBuilder('base')
            .andWhere('base.email=:email', { email })
            .andWhere('base.otp=:otp', { otp })
            .getOne();
    }
    async getDataByEmail(email, id) {
        const request = this.createQueryBuilder('base').andWhere('base.email=:email', { email });
        if (id)
            request.andWhere('base.id!=:id', { id });
        return await request.getOne();
    }
    async getDataByPhoneNumber(phoneNumber, id) {
        const request = this.createQueryBuilder('base').andWhere('base.phoneNumber=:phoneNumber', { phoneNumber });
        if (id)
            request.andWhere('base.id!=:id', { id });
        return await request.getOne();
    }
    async getDataByEmailJoin(email) {
        return await this.createQueryBuilder('base')
            .andWhere('base.email=:email', { email })
            .leftJoinAndSelect('base.role', 'role')
            .leftJoinAndSelect('base.position', 'position')
            .getOne();
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], UserRepository);
//# sourceMappingURL=user.repository.js.map