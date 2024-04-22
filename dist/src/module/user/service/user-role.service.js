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
exports.UserRoleService = exports.P_USER_ROLE_DELETE = exports.P_USER_ROLE_UPDATE = exports.P_USER_ROLE_CREATE = exports.P_USER_ROLE_DETAIL = exports.P_USER_ROLE_LISTED = void 0;
const common_1 = require("@nestjs/common");
const _shared_1 = require("../../../shared");
const _repository_1 = require("../../../repository");
exports.P_USER_ROLE_LISTED = '8f559613-ef55-4ef0-8068-8c37e84b75de';
exports.P_USER_ROLE_DETAIL = '35ea86b5-e591-4819-9c41-4d35ed580d0b';
exports.P_USER_ROLE_CREATE = 'f6732943-cb1d-484b-8644-7740a295e3e3';
exports.P_USER_ROLE_UPDATE = '3e8aa2c2-35bf-4a56-8bf2-8f8de240e24c';
exports.P_USER_ROLE_DELETE = '62fd3bc2-0921-4113-9b5b-9966dd5a0517';
let UserRoleService = class UserRoleService extends _shared_1.BaseService {
    constructor(repo) {
        super(repo);
        this.repo = repo;
        this.listQuery = ['name'];
    }
};
exports.UserRoleService = UserRoleService;
exports.UserRoleService = UserRoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_repository_1.UserRoleRepository])
], UserRoleService);
//# sourceMappingURL=user-role.service.js.map