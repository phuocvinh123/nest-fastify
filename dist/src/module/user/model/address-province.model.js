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
exports.AddressProvince = void 0;
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../shared");
const typeorm_1 = require("typeorm");
const faker_1 = require("@faker-js/faker");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const _model_1 = require("../../../model");
let AddressProvince = class AddressProvince extends _shared_1.Base {
};
exports.AddressProvince = AddressProvince;
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.person.jobType(), description: '' }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressProvince.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.finance.bic(), description: '' }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddressProvince.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _model_1.Address, (address) => address.provinceItem, { eager: true }),
    (0, class_transformer_1.Expose)({ groups: [_shared_1.MaxGroup] }),
    __metadata("design:type", Array)
], AddressProvince.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _model_1.AddressDistrict, (district) => district.provinceItem, { eager: true }),
    (0, class_transformer_1.Expose)({ groups: [_shared_1.MaxGroup] }),
    __metadata("design:type", Array)
], AddressProvince.prototype, "districtItem", void 0);
exports.AddressProvince = AddressProvince = __decorate([
    (0, typeorm_1.Entity)({ schema: 'user' }),
    (0, typeorm_1.Unique)(['code'])
], AddressProvince);
//# sourceMappingURL=address-province.model.js.map