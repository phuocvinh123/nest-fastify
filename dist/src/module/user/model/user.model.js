"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const class_validator_1 = require("class-validator");
const argon2 = __importStar(require("argon2"));
const _model_1 = require("../../../model");
const _shared_1 = require("../../../shared");
let User = class User extends _shared_1.Base {
    beforeAvatar() {
        this.avatar = (0, _shared_1.setImage)(this.avatar);
    }
    afterAvatar() {
        this.avatar = (0, _shared_1.setImage)(this.avatar, false);
    }
    async beforePassword() {
        if (this.password && this.password.length < 60) {
            this.password = this.password && (await argon2.hash(this.password));
        }
    }
    async beforeRefreshToken() {
        this.refreshToken = this.refreshToken && (await argon2.hash(this.refreshToken));
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.person.fullName(), description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.image.url(), description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "beforeAvatar", null);
__decorate([
    (0, typeorm_1.AfterLoad)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "afterAvatar", null);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_transformer_1.Expose)({ groups: [_shared_1.OnlyUpdateGroup] }),
    (0, swagger_1.ApiProperty)({ example: _shared_1.Example.password, description: '' }),
    (0, class_validator_1.MinLength)(6),
    (0, class_validator_1.MaxLength)(59),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "beforePassword", null);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar' }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Object)
], User.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "beforeRefreshToken", null);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'varchar' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], User.prototype, "otp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.internet.email().toLowerCase(), description: '' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.phone.number(), description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(12),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.date.birthdate(), description: '' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], User.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.paragraph(), description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], User.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], User.prototype, "roleCode", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.UserRole, (role) => role.users, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'role_code', referencedColumnName: 'code' }),
    (0, class_transformer_1.Type)(() => _model_1.UserRole),
    __metadata("design:type", _model_1.UserRole)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: 'DEV', description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], User.prototype, "positionCode", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.Code),
    (0, typeorm_1.JoinColumn)({ name: 'position_code', referencedColumnName: 'code' }),
    __metadata("design:type", _model_1.Code)
], User.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.date.past(), description: '' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], User.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'real' }),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.number.int({ min: 0.5, max: 12 }), description: '' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], User.prototype, "dateLeave", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'real', default: 0 }),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.number.int({ min: 0.5, max: 12 }), description: '' }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], User.prototype, "dateOff", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _model_1.Address, (address) => address.user),
    (0, class_transformer_1.Type)(() => _model_1.Address),
    __metadata("design:type", Array)
], User.prototype, "address", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ schema: 'user' })
], User);
//# sourceMappingURL=user.model.js.map