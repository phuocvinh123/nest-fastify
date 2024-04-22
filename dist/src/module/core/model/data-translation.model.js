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
exports.DataTranslation = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const _model_1 = require("../../../model");
const _shared_1 = require("../../../shared");
let DataTranslation = class DataTranslation extends _shared_1.Base {
    beforeContent() {
        this.content = (0, _shared_1.setImageContent)(this.content);
    }
    afterContent() {
        this.content = (0, _shared_1.setImageContent)(this.content, false);
    }
};
exports.DataTranslation = DataTranslation;
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: 'en', description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DataTranslation.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.person.jobType(), description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DataTranslation.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.paragraph(), description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DataTranslation.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.paragraph(), description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DataTranslation.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Expose)({ groups: [_shared_1.MaxGroup] }),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.paragraph(), description: '' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DataTranslation.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DataTranslation.prototype, "beforeContent", null);
__decorate([
    (0, typeorm_1.AfterLoad)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DataTranslation.prototype, "afterContent", null);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_transformer_1.Expose)({ groups: [_shared_1.MaxGroup] }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DataTranslation.prototype, "dataId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.Data, (data) => data.translations, { eager: false, onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", _model_1.Data)
], DataTranslation.prototype, "data", void 0);
exports.DataTranslation = DataTranslation = __decorate([
    (0, typeorm_1.Entity)({ schema: 'core' })
], DataTranslation);
//# sourceMappingURL=data-translation.model.js.map