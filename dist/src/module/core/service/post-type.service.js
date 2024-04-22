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
exports.PostTypeService = exports.P_POST_TYPE_DELETE = exports.P_POST_TYPE_UPDATE = exports.P_POST_TYPE_CREATE = exports.P_POST_TYPE_LISTED = void 0;
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const _shared_1 = require("../../../shared");
const _repository_1 = require("../../../repository");
exports.P_POST_TYPE_LISTED = 'efa34c52-8c9a-444d-a82b-8bec109dbab5';
exports.P_POST_TYPE_CREATE = '87cb77c4-565c-43ec-bffc-fbaf5077c2be';
exports.P_POST_TYPE_UPDATE = 'bfa36cef-71c4-4f08-89e6-d7e0c1c03ba4';
exports.P_POST_TYPE_DELETE = 'cd00c62e-1ec4-4c61-b273-cdd6867a3212';
let PostTypeService = class PostTypeService extends _shared_1.BaseService {
    constructor(repo, repoPost) {
        super(repo);
        this.repo = repo;
        this.repoPost = repoPost;
    }
    async findTree() {
        return this.repo.getTree();
    }
    async createTree(body) {
        let data = await this.create(body);
        if (data && body.idChildren) {
            const parent = await this.findOne(body.idChildren, []);
            if (parent) {
                data.parent = parent;
                data = await this.repo.save(data);
            }
        }
        return data;
    }
    async removeCheck(id) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        const data = await this.findOne(id, []);
        if (data?.code) {
            const count = await this.repoPost.getCountByCode(data.code);
            if (count > 0)
                throw new common_1.BadRequestException(i18n.t("common.User.Can't be deleted because there's still link data"));
            return await this.removeHard(id);
        }
        return null;
    }
};
exports.PostTypeService = PostTypeService;
exports.PostTypeService = PostTypeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_repository_1.PostTypeRepository,
        _repository_1.PostRepository])
], PostTypeService);
//# sourceMappingURL=post-type.service.js.map