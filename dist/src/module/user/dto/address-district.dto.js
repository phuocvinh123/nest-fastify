"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDistrictResponseDto = exports.AddressDistrictDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../shared");
const _model_1 = require("../../../model");
class AddressDistrictDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.AddressDistrict, ['isDeleted', 'createdAt', 'updatedAt', 'name', 'code', 'codeProvince'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return { code: { required: true, type: () => String } };
    }
}
exports.AddressDistrictDto = AddressDistrictDto;
class ListDistrictResponseDto extends (0, swagger_1.PartialType)(_shared_1.PaginationResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("./address-district.dto").AddressDistrictDto] } };
    }
}
exports.ListDistrictResponseDto = ListDistrictResponseDto;
//# sourceMappingURL=address-district.dto.js.map