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
exports.UserService = exports.P_USER_DELETE = exports.P_USER_UPDATE = exports.P_USER_CREATE = exports.P_USER_DETAIL = exports.P_USER_LISTED = void 0;
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const _dto_1 = require("../../../dto");
const _repository_1 = require("../../../repository");
const _shared_1 = require("../../../shared");
const _service_1 = require("../../../service");
exports.P_USER_LISTED = 'ac0c4f13-776d-4b71-be4d-f9952734a319';
exports.P_USER_DETAIL = 'a9de3f3d-4c04-4f50-9d1b-c3c2e2eca6dc';
exports.P_USER_CREATE = '41c9d4e1-ba5a-4850-ad52-35ac928a61d9';
exports.P_USER_UPDATE = 'bc0b5f32-ddf7-4c61-b435-384fc5ac7574';
exports.P_USER_DELETE = 'b82e6224-12c3-4e6c-b4e0-62495fb799bf';
let UserService = class UserService extends _shared_1.BaseService {
    constructor(repo, fileService) {
        super(repo);
        this.repo = repo;
        this.fileService = fileService;
        this.listQuery = ['name', 'email', 'phoneNumber'];
        this.listJoin = ['role', 'position', 'address'];
    }
    async create(body) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        if (body.password !== body.retypedPassword)
            throw new common_1.BadRequestException(i18n.t('common.Auth.Passwords are not identical'));
        const existingUser = await this.repo.getDataByEmail(body.email);
        if (existingUser)
            throw new common_1.BadRequestException(i18n.t('common.Auth.Email is already taken'));
        const existingPhoneNumber = await this.repo.getDataByPhoneNumber(body.phoneNumber);
        if (existingPhoneNumber)
            throw new common_1.BadRequestException(i18n.t('common.Auth.Phone number is already taken'));
        const data = await super.create(body);
        if (data?.avatar)
            await this.fileService.activeFiles([data?.avatar]);
        await this.fileService.activeFiles((0, _shared_1.getImages)(['avatar'], data)[0]);
        return data;
    }
    async update(id, body, callBack) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        if (body instanceof _dto_1.UpdateUserRequestDto && body?.email) {
            const existingUser = await this.repo.getDataByEmail(body.email, id);
            if (existingUser)
                throw new common_1.BadRequestException(i18n.t('common.Auth.Email is already taken'));
        }
        if (body instanceof _dto_1.UpdateUserRequestDto && body?.phoneNumber) {
            const existingPhoneNumber = await this.repo.getDataByPhoneNumber(body.phoneNumber, id);
            if (existingPhoneNumber)
                throw new common_1.BadRequestException(i18n.t('common.Auth.Phone number is already taken'));
        }
        const oldData = await this.findOne(id, []);
        const data = await super.update(id, body, callBack);
        const [listFilesActive, listFilesRemove] = (0, _shared_1.getImages)(['thumbnailUrl'], data, [], oldData);
        await this.fileService.activeFiles(listFilesActive);
        await this.fileService.removeFiles(listFilesRemove);
        return data;
    }
    async remove(id) {
        const data = await super.remove(id);
        if (data?.avatar)
            await this.fileService.removeFiles([data?.avatar]);
        await this.fileService.removeFiles((0, _shared_1.getImages)(['thumbnailUrl'], data)[0]);
        return data;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_repository_1.UserRepository,
        _service_1.FileService])
], UserService);
//# sourceMappingURL=user.service.js.map