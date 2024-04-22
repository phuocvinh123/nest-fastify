"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBuildingResponseDto = exports.BuildingResponseDto = exports.BuildingDto = exports.UpdateBuildingRequestDto = exports.CreateBuildingRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../shared");
const _model_1 = require("../../../model");
class CreateBuildingRequestDto extends (0, swagger_1.PickType)(_model_1.Building, []) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateBuildingRequestDto = CreateBuildingRequestDto;
class UpdateBuildingRequestDto extends (0, swagger_1.PartialType)(CreateBuildingRequestDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateBuildingRequestDto = UpdateBuildingRequestDto;
class BuildingDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.Building, ['isDeleted'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.BuildingDto = BuildingDto;
class BuildingResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("./building.dto").BuildingDto, nullable: true } };
    }
}
exports.BuildingResponseDto = BuildingResponseDto;
class ListBuildingResponseDto extends (0, swagger_1.PartialType)(_shared_1.PaginationResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("./building.dto").BuildingDto] } };
    }
}
exports.ListBuildingResponseDto = ListBuildingResponseDto;
//# sourceMappingURL=building.dto.js.map