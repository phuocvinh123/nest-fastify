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
exports.PostService = exports.P_POST_DELETE = exports.P_POST_UPDATE = exports.P_POST_CREATE = exports.P_POST_LISTED = void 0;
const common_1 = require("@nestjs/common");
const _repository_1 = require("../../../repository");
const _shared_1 = require("../../../shared");
const file_service_1 = require("./file.service");
exports.P_POST_LISTED = '7c34dc92-cbbe-4419-8dbc-745818d76098';
exports.P_POST_CREATE = '0ca9634c-3496-4059-bf86-5bec23c96b55';
exports.P_POST_UPDATE = 'eda2799a-4072-46a7-9a26-efa9a98036db';
exports.P_POST_DELETE = '4097d5ff-e35c-4bff-a5b1-013ca1181762';
let PostService = class PostService extends _shared_1.BaseService {
    constructor(repo, repoTranslation, fileService) {
        super(repo);
        this.repo = repo;
        this.repoTranslation = repoTranslation;
        this.fileService = fileService;
        this.listJoin = ['translations'];
    }
    async findArrayCode(types) {
        const tempData = {};
        for (const type of types) {
            tempData[type] = (await this.findAll({ filter: '{"isDisabled":"NULL"}', sorts: '{"createdAt":"DESC"}' }))[0];
        }
        return tempData;
    }
    async findSlug(slug) {
        const postTranslation = await this.repoTranslation.getDataBySlug(slug);
        if (postTranslation?.postId)
            return this.findOne(postTranslation.postId, []);
        return null;
    }
    async create(body) {
        const data = await this.repo.createWithTranslation(body);
        await this.fileService.activeFiles((0, _shared_1.getImages)(['thumbnailUrl'], data, ['translations'])[0]);
        return data;
    }
    async update(id, body) {
        const oldData = await this.findOne(id, []);
        const data = await this.repo.updateWithTranslation(id, body);
        const [listFilesActive, listFilesRemove] = (0, _shared_1.getImages)(['thumbnailUrl'], data, ['translations'], oldData);
        await this.fileService.activeFiles(listFilesActive);
        await this.fileService.removeFiles(listFilesRemove);
        return data;
    }
    async removeHard(id) {
        const data = await super.removeHard(id);
        await this.fileService.removeFiles((0, _shared_1.getImages)(['thumbnailUrl'], data, ['translations'])[0]);
        return data;
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_repository_1.PostRepository,
        _repository_1.PostTranslationRepository,
        file_service_1.FileService])
], PostService);
//# sourceMappingURL=post.service.js.map