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
exports.AddressWard = void 0;
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../shared");
const typeorm_1 = require("typeorm");
const faker_1 = require("@faker-js/faker");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const _model_1 = require("../../../model");
let AddressWard = class AddressWard extends _shared_1.Base {
};
exports.AddressWard = AddressWard;
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.person.jobType(), description: '' }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressWard.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.finance.bic(), description: '' }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressWard.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.finance.bic(), description: '' }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressWard.prototype, "codeDistrict", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.AddressDistrict, (district) => district.wardItem, { eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'code_district', referencedColumnName: 'code' }),
    __metadata("design:type", _model_1.AddressDistrict)
], AddressWard.prototype, "districtItem", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _model_1.Address, (address) => address.wardItem, { eager: false }),
    (0, class_transformer_1.Expose)({ groups: [_shared_1.MaxGroup] }),
    __metadata("design:type", _model_1.Address)
], AddressWard.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _model_1.OrderAddress, (od) => od.codeWard, { eager: false }),
    (0, class_transformer_1.Expose)({ groups: [_shared_1.MaxGroup] }),
    __metadata("design:type", Array)
], AddressWard.prototype, "orderAddress", void 0);
exports.AddressWard = AddressWard = __decorate([
    (0, typeorm_1.Entity)({ schema: 'user' }),
    (0, typeorm_1.Unique)(['code'])
], AddressWard);
//# sourceMappingURL=address-ward.model.js.map