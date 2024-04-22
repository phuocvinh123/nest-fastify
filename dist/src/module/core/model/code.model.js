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
exports.Code = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const _model_1 = require("../../../model");
const _shared_1 = require("../../../shared");
let Code = class Code extends _shared_1.Base {
};
exports.Code = Code;
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.string.alpha({ length: 3, casing: 'upper', exclude: ['A'] }), description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Code.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.string.alpha({ length: 3, casing: 'upper', exclude: ['A'] }), description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], Code.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.person.jobType(), description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Code.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.paragraph(), description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Code.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.CodeType, (codeType) => codeType.items, { eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'type', referencedColumnName: 'code' }),
    __metadata("design:type", _model_1.CodeType)
], Code.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _model_1.User, (user) => user.position),
    (0, typeorm_1.JoinColumn)({ name: 'position_code', referencedColumnName: 'code' }),
    (0, class_transformer_1.Type)(() => _model_1.User),
    __metadata("design:type", Array)
], Code.prototype, "users", void 0);
exports.Code = Code = __decorate([
    (0, typeorm_1.Entity)({ schema: 'core' }),
    (0, typeorm_1.Unique)(['code'])
], Code);
//# sourceMappingURL=code.model.js.map