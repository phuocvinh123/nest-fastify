"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTypeRelationshipResponseDto = exports.CodeTypeRelationshipDto = exports.ListCodeTypeResponseDto = exports.CodeTypeResponseDto = exports.CodeTypeDto = exports.UpdateCodeTypeRequestDto = exports.CreateCodeTypeRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const _model_1 = require("../../../model");
const _shared_1 = require("../../../shared");
class CreateCodeTypeRequestDto extends (0, swagger_1.PickType)(_model_1.CodeType, ['name', 'code']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateCodeTypeRequestDto = CreateCodeTypeRequestDto;
class UpdateCodeTypeRequestDto extends (0, swagger_1.PickType)(_model_1.CodeType, ['name']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateCodeTypeRequestDto = UpdateCodeTypeRequestDto;
class CodeTypeDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.CodeType, ['isDeleted', 'createdAt', 'updatedAt', 'items'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CodeTypeDto = CodeTypeDto;
class CodeTypeResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("./code-type.dto").CodeTypeDto, nullable: true } };
    }
}
exports.CodeTypeResponseDto = CodeTypeResponseDto;
class ListCodeTypeResponseDto extends (0, swagger_1.PartialType)(_shared_1.PaginationResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("./code-type.dto").CodeTypeDto] } };
    }
}
exports.ListCodeTypeResponseDto = ListCodeTypeResponseDto;
class CodeTypeRelationshipDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.CodeType, ['isDeleted', 'createdAt', 'updatedAt', 'items'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return { items: { required: false, type: () => [require("./code.dto").CodeDto] } };
    }
}
exports.CodeTypeRelationshipDto = CodeTypeRelationshipDto;
class CodeTypeRelationshipResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("./code-type.dto").CodeTypeRelationshipDto, nullable: true } };
    }
}
exports.CodeTypeRelationshipResponseDto = CodeTypeRelationshipResponseDto;
//# sourceMappingURL=code-type.dto.js.map