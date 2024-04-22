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
exports.UserRole = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const _model_1 = require("../../../model");
const _shared_1 = require("../../../shared");
let UserRole = class UserRole extends _shared_1.Base {
};
exports.UserRole = UserRole;
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.finance.bic(), description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserRole.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.person.jobType(), description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserRole.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, swagger_1.ApiProperty)({ example: false, description: '' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UserRole.prototype, "isSystemAdmin", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        array: false,
        default: [],
        nullable: false,
    }),
    (0, swagger_1.ApiProperty)({ example: [], description: '' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UserRole.prototype, "permissions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _model_1.User, (user) => user.role),
    __metadata("design:type", Array)
], UserRole.prototype, "users", void 0);
exports.UserRole = UserRole = __decorate([
    (0, typeorm_1.Entity)({ schema: 'user' }),
    (0, typeorm_1.Unique)(['code'])
], UserRole);
//# sourceMappingURL=user-role.model.js.map