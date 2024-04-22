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
exports.DataType = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const _shared_1 = require("../../../shared");
const _model_1 = require("../../../model");
let DataType = class DataType extends _shared_1.Base {
};
exports.DataType = DataType;
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.person.jobType(), description: '' }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DataType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.string.alpha({ length: 3, casing: 'upper', exclude: ['A'] }), description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], DataType.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: false, description: '' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], DataType.prototype, "isPrimary", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _model_1.Data, (data) => data.item, { eager: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, class_transformer_1.Expose)({ groups: [_shared_1.MaxGroup] }),
    __metadata("design:type", Array)
], DataType.prototype, "items", void 0);
exports.DataType = DataType = __decorate([
    (0, typeorm_1.Entity)({ schema: 'core' }),
    (0, typeorm_1.Unique)(['code'])
], DataType);
//# sourceMappingURL=data-type.model.js.map