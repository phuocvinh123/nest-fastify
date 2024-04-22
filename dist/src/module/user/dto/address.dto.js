"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAddressResponseDto = exports.AddressResponseDto = exports.AddressDto = exports.UpdateAddressRequestDto = exports.CreateAddressRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../shared");
const _model_1 = require("../../../model");
class CreateAddressRequestDto extends (0, swagger_1.PickType)(_model_1.Address, [
    'codeProvince',
    'codeDistrict',
    'codeWard',
    'specificAddress',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateAddressRequestDto = CreateAddressRequestDto;
class UpdateAddressRequestDto extends (0, swagger_1.PartialType)(CreateAddressRequestDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateAddressRequestDto = UpdateAddressRequestDto;
class AddressDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.Address, ['isDeleted', 'createdAt', 'updatedAt', 'specificAddress'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.AddressDto = AddressDto;
class AddressResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("./address.dto").AddressDto, nullable: true } };
    }
}
exports.AddressResponseDto = AddressResponseDto;
class ListAddressResponseDto extends (0, swagger_1.PartialType)(_shared_1.PaginationResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("./address.dto").AddressDto] } };
    }
}
exports.ListAddressResponseDto = ListAddressResponseDto;
//# sourceMappingURL=address.dto.js.map