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
exports.AddressDistrict = void 0;
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../shared");
const typeorm_1 = require("typeorm");
const faker_1 = require("@faker-js/faker");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const _model_1 = require("../../../model");
const _model_2 = require("../../../model");
let AddressDistrict = class AddressDistrict extends _shared_1.Base {
};
exports.AddressDistrict = AddressDistrict;
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.person.jobType(), description: '' }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressDistrict.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.finance.bic(), description: '' }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressDistrict.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.finance.bic(), description: '' }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressDistrict.prototype, "codeProvince", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_2.AddressProvince, (province) => province.districtItem, { eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'code_province', referencedColumnName: 'code' }),
    __metadata("design:type", _model_2.AddressProvince)
], AddressDistrict.prototype, "provinceItem", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _model_1.Address, (address) => address.districtItem, { eager: false }),
    (0, class_transformer_1.Expose)({ groups: [_shared_1.MaxGroup] }),
    __metadata("design:type", _model_1.Address)
], AddressDistrict.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _model_2.AddressWard, (ward) => ward.districtItem, { eager: false }),
    (0, class_transformer_1.Expose)({ groups: [_shared_1.MaxGroup] }),
    __metadata("design:type", Array)
], AddressDistrict.prototype, "wardItem", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _model_1.OrderAddress, (od) => od.codeWard, { eager: false }),
    (0, class_transformer_1.Expose)({ groups: [_shared_1.MaxGroup] }),
    __metadata("design:type", Array)
], AddressDistrict.prototype, "orderAddress", void 0);
exports.AddressDistrict = AddressDistrict = __decorate([
    (0, typeorm_1.Entity)({ schema: 'user' }),
    (0, typeorm_1.Unique)(['code'])
], AddressDistrict);
//# sourceMappingURL=address-district.model.js.map