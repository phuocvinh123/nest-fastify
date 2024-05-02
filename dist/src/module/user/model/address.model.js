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
exports.Address = void 0;
const _model_1 = require("../../../model");
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../shared");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let Address = class Address extends _shared_1.Base {
};
exports.Address = Address;
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.location.countryCode('alpha-2'), description: '' }),
    __metadata("design:type", String)
], Address.prototype, "codeProvince", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.AddressProvince, (province) => province.items, { eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'code_province', referencedColumnName: 'code' }),
    __metadata("design:type", _model_1.AddressProvince)
], Address.prototype, "provinceItem", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.string.alpha({ length: 4, casing: 'upper', exclude: ['A'] }), description: '' }),
    __metadata("design:type", String)
], Address.prototype, "codeDistrict", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.AddressDistrict, (district) => district.item, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'code_district', referencedColumnName: 'code' }),
    __metadata("design:type", _model_1.AddressDistrict)
], Address.prototype, "districtItem", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.string.alpha({ length: 4, casing: 'upper', exclude: ['A'] }), description: '' }),
    __metadata("design:type", String)
], Address.prototype, "codeWard", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.AddressWard, (ward) => ward.item, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'code_ward', referencedColumnName: 'code' }),
    __metadata("design:type", _model_1.AddressWard)
], Address.prototype, "wardItem", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.paragraph(), description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Address.prototype, "specificAddress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.string.uuid(), description: '' }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], Address.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.User, (user) => user.address, { eager: true }),
    (0, typeorm_1.JoinColumn)(),
    (0, class_transformer_1.Type)(() => _model_1.User),
    __metadata("design:type", _model_1.User)
], Address.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _model_1.OrderAddress, (od) => od.codeWard, { eager: false }),
    (0, class_transformer_1.Expose)({ groups: [_shared_1.MaxGroup] }),
    __metadata("design:type", Array)
], Address.prototype, "orderAddress", void 0);
exports.Address = Address = __decorate([
    (0, typeorm_1.Entity)({ schema: 'user' })
], Address);
//# sourceMappingURL=address.model.js.map