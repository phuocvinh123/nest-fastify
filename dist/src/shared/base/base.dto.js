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
exports.PaginationResponsesDto = exports.PaginationQueryDto = exports.DefaultResponsesDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class DefaultResponsesDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { message: { required: true, type: () => String } };
    }
}
exports.DefaultResponsesDto = DefaultResponsesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.sentence(), description: '' }),
    __metadata("design:type", String)
], DefaultResponsesDto.prototype, "message", void 0);
class PaginationQueryDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { perPage: { required: false, type: () => Number, minimum: 1 }, page: { required: false, type: () => Number, minimum: 1 }, filter: { required: false, type: () => String }, sorts: { required: false, type: () => String }, extend: { required: false, type: () => Object }, skip: { required: false, type: () => Object }, fullTextSearch: { required: false, type: () => String }, where: { required: false, type: () => [Object] }, array: { required: false, type: () => [String] } };
    }
}
exports.PaginationQueryDto = PaginationQueryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], PaginationQueryDto.prototype, "perPage", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], PaginationQueryDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => JSON.parse(value)),
    __metadata("design:type", String)
], PaginationQueryDto.prototype, "filter", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => JSON.parse(value)),
    __metadata("design:type", String)
], PaginationQueryDto.prototype, "sorts", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => JSON.parse(value)),
    __metadata("design:type", Object)
], PaginationQueryDto.prototype, "extend", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => JSON.parse(value)),
    __metadata("design:type", Object)
], PaginationQueryDto.prototype, "skip", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PaginationQueryDto.prototype, "fullTextSearch", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => JSON.parse(value)),
    __metadata("design:type", Array)
], PaginationQueryDto.prototype, "array", void 0);
class PaginationResponsesDto extends (0, swagger_1.PartialType)(DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { count: { required: true, type: () => Number } };
    }
}
exports.PaginationResponsesDto = PaginationResponsesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.string.numeric(), description: '' }),
    __metadata("design:type", Number)
], PaginationResponsesDto.prototype, "count", void 0);
//# sourceMappingURL=base.dto.js.map