"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProvinceResponseDto = exports.AddressProvinceDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../shared");
const _model_1 = require("../../../model");
class AddressProvinceDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.AddressProvince, ['isDeleted', 'createdAt', 'updatedAt', 'name', 'code'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return { code: { required: true, type: () => String } };
    }
}
exports.AddressProvinceDto = AddressProvinceDto;
class ListProvinceResponseDto extends (0, swagger_1.PartialType)(_shared_1.PaginationResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("./address-province.dto").AddressProvinceDto] } };
    }
}
exports.ListProvinceResponseDto = ListProvinceResponseDto;
//# sourceMappingURL=address-province.dto.js.map