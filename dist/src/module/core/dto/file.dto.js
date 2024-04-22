"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFileResponseDto = exports.FileResponseDto = exports.UpdateFileRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../shared");
const _model_1 = require("../../../model");
class UpdateFileRequestDto extends (0, swagger_1.PickType)(_model_1.File, ['url', 'description']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateFileRequestDto = UpdateFileRequestDto;
class FileResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("../model/file.model").File, nullable: true } };
    }
}
exports.FileResponseDto = FileResponseDto;
class ListFileResponseDto extends (0, swagger_1.PartialType)(_shared_1.PaginationResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../model/file.model").File] } };
    }
}
exports.ListFileResponseDto = ListFileResponseDto;
//# sourceMappingURL=file.dto.js.map