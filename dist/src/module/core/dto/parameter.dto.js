"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListParameterResponseDto = exports.ParameterResponseDto = exports.ParameterDto = exports.UpdateParameterRequestDto = exports.CreateParameterRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../shared");
const _model_1 = require("../../../model");
class CreateParameterRequestDto extends (0, swagger_1.PickType)(_model_1.Parameter, ['code', 'vn', 'en']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateParameterRequestDto = CreateParameterRequestDto;
class UpdateParameterRequestDto extends (0, swagger_1.PartialType)(CreateParameterRequestDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateParameterRequestDto = UpdateParameterRequestDto;
class ParameterDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.Parameter, ['isDeleted', 'createdAt', 'updatedAt'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.ParameterDto = ParameterDto;
class ParameterResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("./parameter.dto").ParameterDto, nullable: true } };
    }
}
exports.ParameterResponseDto = ParameterResponseDto;
class ListParameterResponseDto extends (0, swagger_1.PartialType)(_shared_1.PaginationResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("./parameter.dto").ParameterDto] } };
    }
}
exports.ListParameterResponseDto = ListParameterResponseDto;
//# sourceMappingURL=parameter.dto.js.map