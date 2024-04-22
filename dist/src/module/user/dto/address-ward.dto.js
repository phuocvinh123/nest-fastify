"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWardResponseDto = exports.AddressWardDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../shared");
const _model_1 = require("../../../model");
class AddressWardDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.AddressWard, ['isDeleted', 'createdAt', 'updatedAt', 'name', 'code', 'codeDistrict'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.AddressWardDto = AddressWardDto;
class ListWardResponseDto extends (0, swagger_1.PartialType)(_shared_1.PaginationResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("./address-ward.dto").AddressWardDto] } };
    }
}
exports.ListWardResponseDto = ListWardResponseDto;
//# sourceMappingURL=address-ward.dto.js.map