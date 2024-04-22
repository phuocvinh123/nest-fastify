"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeRelationshipResponseDto = exports.CodeRelationshipDto = exports.ListCodeResponseDto = exports.CodeResponseDto = exports.CodeDto = exports.UpdateCodeRequestDto = exports.CreateCodeRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const _model_1 = require("../../../model");
const _shared_1 = require("../../../shared");
class CreateCodeRequestDto extends (0, swagger_1.PickType)(_model_1.Code, ['code', 'type', 'name', 'description']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateCodeRequestDto = CreateCodeRequestDto;
class UpdateCodeRequestDto extends (0, swagger_1.PartialType)(CreateCodeRequestDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateCodeRequestDto = UpdateCodeRequestDto;
class CodeDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.Code, ['isDeleted', 'createdAt', 'updatedAt', 'users', 'item'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CodeDto = CodeDto;
class CodeResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("./code.dto").CodeDto, nullable: true } };
    }
}
exports.CodeResponseDto = CodeResponseDto;
class ListCodeResponseDto extends (0, swagger_1.PartialType)(_shared_1.PaginationResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("./code.dto").CodeDto] } };
    }
}
exports.ListCodeResponseDto = ListCodeResponseDto;
class CodeRelationshipDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.Code, ['isDeleted', 'createdAt', 'updatedAt', 'users', 'item'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return { item: { required: false, type: () => require("./code-type.dto").CodeTypeDto } };
    }
}
exports.CodeRelationshipDto = CodeRelationshipDto;
class CodeRelationshipResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("./code.dto").CodeRelationshipDto, nullable: true } };
    }
}
exports.CodeRelationshipResponseDto = CodeRelationshipResponseDto;
//# sourceMappingURL=code.dto.js.map