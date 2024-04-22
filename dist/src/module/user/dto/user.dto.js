"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseDto = exports.UserDto = exports.ListUserResponseDto = exports.UpdateUserRequestDto = exports.CreateUserRequestDto = exports.ProfileAuthResponseDto = exports.DefaultAuthResponsesUserDto = exports.AuthDto = exports.DefaultForgottenPasswordResponseDto = exports.DefaultAuthResponseDto = exports.RestPasswordAuthRequestDto = exports.OTPConfirmationAuthRequestDto = exports.ForgottenPasswordAuthRequestDto = exports.ProfileAuthRequestDto = exports.ContactRequestDto = exports.RegisterAuthRequestDto = exports.LoginAuthRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const _model_1 = require("../../../model");
const _shared_1 = require("../../../shared");
class LoginAuthRequestDto extends (0, swagger_1.PickType)(_model_1.User, ['email', 'password']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.LoginAuthRequestDto = LoginAuthRequestDto;
class RegisterAuthRequestDto extends (0, swagger_1.PickType)(_model_1.User, [
    'name',
    'password',
    'email',
    'phoneNumber',
    'dob',
    'description',
    'startDate',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { retypedPassword: { required: true, type: () => String, minLength: 6 } };
    }
}
exports.RegisterAuthRequestDto = RegisterAuthRequestDto;
__decorate([
    (0, class_validator_1.MinLength)(6),
    (0, swagger_1.ApiProperty)({ example: _shared_1.Example.password, description: '' }),
    __metadata("design:type", String)
], RegisterAuthRequestDto.prototype, "retypedPassword", void 0);
class ContactRequestDto extends (0, swagger_1.PickType)(_model_1.User, ['email', 'phoneNumber', 'description']) {
    static _OPENAPI_METADATA_FACTORY() {
        return { firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String } };
    }
}
exports.ContactRequestDto = ContactRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.person.firstName(), description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContactRequestDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.person.lastName(), description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ContactRequestDto.prototype, "lastName", void 0);
class ProfileAuthRequestDto extends (0, swagger_1.PickType)(_model_1.User, [
    'name',
    'password',
    'email',
    'phoneNumber',
    'dob',
    'positionCode',
    'description',
    'avatar',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { retypedPassword: { required: true, type: () => String }, passwordOld: { required: true, type: () => String } };
    }
}
exports.ProfileAuthRequestDto = ProfileAuthRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: _shared_1.Example.password, description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProfileAuthRequestDto.prototype, "retypedPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: _shared_1.Example.password, description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProfileAuthRequestDto.prototype, "passwordOld", void 0);
class ForgottenPasswordAuthRequestDto extends (0, swagger_1.PickType)(_model_1.User, ['email']) {
    static _OPENAPI_METADATA_FACTORY() {
        return { notSendEmail: { required: true, type: () => Boolean } };
    }
}
exports.ForgottenPasswordAuthRequestDto = ForgottenPasswordAuthRequestDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ForgottenPasswordAuthRequestDto.prototype, "notSendEmail", void 0);
class OTPConfirmationAuthRequestDto extends (0, swagger_1.PickType)(_model_1.User, ['email', 'otp']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.OTPConfirmationAuthRequestDto = OTPConfirmationAuthRequestDto;
class RestPasswordAuthRequestDto extends (0, swagger_1.PickType)(_model_1.User, ['email', 'otp', 'password']) {
    static _OPENAPI_METADATA_FACTORY() {
        return { retypedPassword: { required: true, type: () => String, minLength: 6 } };
    }
}
exports.RestPasswordAuthRequestDto = RestPasswordAuthRequestDto;
__decorate([
    (0, class_validator_1.MinLength)(6),
    (0, swagger_1.ApiProperty)({ example: _shared_1.Example.password, description: '' }),
    __metadata("design:type", String)
], RestPasswordAuthRequestDto.prototype, "retypedPassword", void 0);
class DefaultAuthResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("./user.dto").AuthDto } };
    }
}
exports.DefaultAuthResponseDto = DefaultAuthResponseDto;
class DefaultForgottenPasswordResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => Object } };
    }
}
exports.DefaultForgottenPasswordResponseDto = DefaultForgottenPasswordResponseDto;
class AuthDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { user: { required: true, type: () => require("./user.dto").DefaultAuthResponsesUserDto }, accessToken: { required: true, type: () => String }, refreshToken: { required: true, type: () => String } };
    }
}
exports.AuthDto = AuthDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: _shared_1.Example.token, description: '' }),
    __metadata("design:type", String)
], AuthDto.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: _shared_1.Example.token, description: '' }),
    __metadata("design:type", String)
], AuthDto.prototype, "refreshToken", void 0);
class DefaultAuthResponsesUserDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.User, ['password', 'position', 'role'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return { position: { required: false, type: () => require("../../core/dto/code.dto").CodeDto }, role: { required: false, type: () => require("./user-role.dto").UserRoleDto } };
    }
}
exports.DefaultAuthResponsesUserDto = DefaultAuthResponsesUserDto;
class ProfileAuthResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("./user.dto").DefaultAuthResponsesUserDto } };
    }
}
exports.ProfileAuthResponseDto = ProfileAuthResponseDto;
class CreateUserRequestDto extends (0, swagger_1.PickType)(_model_1.User, [
    'password',
    'name',
    'email',
    'phoneNumber',
    'dob',
    'startDate',
    'positionCode',
    'description',
    'avatar',
    'dateLeave',
    'roleCode',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { retypedPassword: { required: true, type: () => String, minLength: 6 } };
    }
}
exports.CreateUserRequestDto = CreateUserRequestDto;
__decorate([
    (0, class_validator_1.MinLength)(6),
    (0, swagger_1.ApiProperty)({ example: _shared_1.Example.password, description: '' }),
    __metadata("design:type", String)
], CreateUserRequestDto.prototype, "retypedPassword", void 0);
class UpdateUserRequestDto extends (0, swagger_1.PickType)(_model_1.User, [
    'name',
    'email',
    'phoneNumber',
    'dob',
    'startDate',
    'positionCode',
    'description',
    'avatar',
    'dateLeave',
    'roleCode',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateUserRequestDto = UpdateUserRequestDto;
class ListUserResponseDto extends (0, swagger_1.PartialType)(_shared_1.PaginationResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../model/user.model").User] } };
    }
}
exports.ListUserResponseDto = ListUserResponseDto;
class UserDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.User, ['isDeleted', 'createdAt', 'updatedAt', 'password', 'position', 'role'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return { position: { required: true, type: () => require("../../core/dto/code.dto").CodeDto }, role: { required: true, type: () => require("./user-role.dto").UserRoleDto } };
    }
}
exports.UserDto = UserDto;
class UserResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("./user.dto").DefaultAuthResponsesUserDto, nullable: true } };
    }
}
exports.UserResponseDto = UserResponseDto;
//# sourceMappingURL=user.dto.js.map