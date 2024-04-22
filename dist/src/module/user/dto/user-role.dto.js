"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleResponseDto = exports.PermissionResponseDto = exports.UserRoleDto = exports.ListUserRoleResponseDto = exports.UpdateUserRoleRequestDto = exports.CreateUserRoleRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const _model_1 = require("../../../model");
const _shared_1 = require("../../../shared");
class CreateUserRoleRequestDto extends (0, swagger_1.PickType)(_model_1.UserRole, [
    'name',
    'code',
    'isSystemAdmin',
    'permissions',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateUserRoleRequestDto = CreateUserRoleRequestDto;
class UpdateUserRoleRequestDto extends (0, swagger_1.PartialType)(CreateUserRoleRequestDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateUserRoleRequestDto = UpdateUserRoleRequestDto;
class ListUserRoleResponseDto extends (0, swagger_1.PartialType)(_shared_1.PaginationResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("./user-role.dto").UserRoleDto] } };
    }
}
exports.ListUserRoleResponseDto = ListUserRoleResponseDto;
class UserRoleDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.UserRole, ['isDeleted', 'createdAt', 'updatedAt', 'users'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UserRoleDto = UserRoleDto;
class PermissionResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [String] } };
    }
}
exports.PermissionResponseDto = PermissionResponseDto;
class UserRoleResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("../model/user-role.model").UserRole, nullable: true } };
    }
}
exports.UserRoleResponseDto = UserRoleResponseDto;
//# sourceMappingURL=user-role.dto.js.map