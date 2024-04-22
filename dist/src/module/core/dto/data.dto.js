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
exports.ListDataResponseDto = exports.DataResponseDto = exports.DataDto = exports.ArrayDataResponseDto = exports.UpdateDataRequestDto = exports.CreateDataTranslationRequestDto = exports.CreateDataRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const _shared_1 = require("../../../shared");
const _model_1 = require("../../../model");
class CreateDataRequestDto extends (0, swagger_1.PickType)(_model_1.Data, [
    'type',
    'image',
    'name',
    'order',
    'createdAt',
    'isDisabled',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { translations: { required: false, type: () => [require("./data.dto").CreateDataTranslationRequestDto] } };
    }
}
exports.CreateDataRequestDto = CreateDataRequestDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateDataRequestDto.prototype, "translations", void 0);
class CreateDataTranslationRequestDto extends (0, swagger_1.PickType)(_model_1.DataTranslation, [
    'id',
    'language',
    'name',
    'description',
    'position',
    'content',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateDataTranslationRequestDto = CreateDataTranslationRequestDto;
class UpdateDataRequestDto extends (0, swagger_1.PartialType)(CreateDataRequestDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateDataRequestDto = UpdateDataRequestDto;
class ArrayDataResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.ArrayDataResponseDto = ArrayDataResponseDto;
class DataDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.Data, ['isDeleted', 'createdAt', 'updatedAt', 'translations', 'item'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.DataDto = DataDto;
class DataResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("./data.dto").DataDto, nullable: true } };
    }
}
exports.DataResponseDto = DataResponseDto;
class ListDataResponseDto extends (0, swagger_1.PartialType)(_shared_1.PaginationResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("./data.dto").DataDto] } };
    }
}
exports.ListDataResponseDto = ListDataResponseDto;
//# sourceMappingURL=data.dto.js.map