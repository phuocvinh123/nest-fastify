"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDataTypeResponseDto = exports.DataTypeResponseDto = exports.DataTypeDto = exports.UpdateDataTypeRequestDto = exports.CreateDataTypeRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../shared");
const _model_1 = require("../../../model");
class CreateDataTypeRequestDto extends (0, swagger_1.PickType)(_model_1.DataType, ['name', 'code']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateDataTypeRequestDto = CreateDataTypeRequestDto;
class UpdateDataTypeRequestDto extends (0, swagger_1.PickType)(_model_1.DataType, ['name']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateDataTypeRequestDto = UpdateDataTypeRequestDto;
class DataTypeDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.DataType, ['isDeleted', 'createdAt', 'updatedAt', 'items'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.DataTypeDto = DataTypeDto;
class DataTypeResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("./data-type.dto").DataTypeDto, nullable: true } };
    }
}
exports.DataTypeResponseDto = DataTypeResponseDto;
class ListDataTypeResponseDto extends (0, swagger_1.PartialType)(_shared_1.PaginationResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("./data-type.dto").DataTypeDto] } };
    }
}
exports.ListDataTypeResponseDto = ListDataTypeResponseDto;
//# sourceMappingURL=data-type.dto.js.map