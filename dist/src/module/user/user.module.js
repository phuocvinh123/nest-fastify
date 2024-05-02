"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const _config_1 = require("../../config");
const _controller_1 = require("../../controller");
const _service_1 = require("../../service");
const _repository_1 = require("../../repository");
const _shared_1 = require("../../shared");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: _config_1.appConfig.ID_TOKEN_PUBLIC_KEY_AS_BASE64,
                signOptions: {
                    expiresIn: '30m',
                },
            }),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
        ],
        controllers: [
            _controller_1.AuthController,
            _controller_1.UserRoleController,
            _controller_1.UserController,
            _controller_1.AddressProvinceController,
            _controller_1.AddressDistrictController,
            _controller_1.AddressWardController,
            _controller_1.AddressController,
        ],
        providers: [
            _shared_1.AccessTokenStrategy,
            _shared_1.RefreshTokenStrategy,
            _service_1.EmailService,
            _service_1.AuthService,
            _repository_1.UserRepository,
            _service_1.UserService,
            _repository_1.UserRoleRepository,
            _service_1.UserRoleService,
            _repository_1.FileRepository,
            _service_1.FileService,
            _repository_1.AddressProvinceRepository,
            _service_1.AddressProvinceService,
            _repository_1.AddressDistrictRepository,
            _service_1.AddressDistrictService,
            _repository_1.AddressWardRepository,
            _service_1.AddressWardService,
            _repository_1.AddressRepository,
            _service_1.AddressService,
        ],
        exports: [
            _service_1.AuthService,
            _repository_1.UserRepository,
            _service_1.UserService,
            _repository_1.UserRoleRepository,
            _service_1.UserRoleService,
            _repository_1.FileRepository,
            _service_1.FileService,
            _repository_1.AddressProvinceRepository,
            _service_1.AddressProvinceService,
            _repository_1.AddressDistrictRepository,
            _service_1.AddressDistrictService,
            _repository_1.AddressWardRepository,
            _service_1.AddressWardService,
            _repository_1.AddressRepository,
            _service_1.AddressService,
        ],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map