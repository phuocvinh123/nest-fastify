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
exports.PostRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const nestjs_i18n_1 = require("nestjs-i18n");
const _model_1 = require("../../../model");
const _shared_1 = require("../../../shared");
let PostRepository = class PostRepository extends _shared_1.BaseRepository {
    constructor(dataSource) {
        super(_model_1.Post, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async getCountByCode(code) {
        return await this.createQueryBuilder('base').where(`base.type=:code`, { code }).withDeleted().getCount();
    }
    async createWithTranslation({ translations, ...body }) {
        let result = null;
        await this.dataSource.transaction(async (entityManager) => {
            const i18n = nestjs_i18n_1.I18nContext.current();
            result = await entityManager.save(entityManager.create(_model_1.Post, { ...body }));
            if (translations) {
                result.translations = [];
                for (const item of translations) {
                    delete item.id;
                    const existingName = await entityManager
                        .createQueryBuilder(_model_1.PostTranslation, 'base')
                        .andWhere(`base.name=:name`, { name: item.name })
                        .andWhere(`base.language=:language`, { language: item.language })
                        .withDeleted()
                        .getCount();
                    if (existingName)
                        throw new common_1.BadRequestException(i18n.t('common.Data.Name is already taken'));
                    const data = await entityManager.save(entityManager.create(_model_1.PostTranslation, { postId: result.id, ...item }));
                    if (data)
                        result.translations.push(data);
                }
            }
        });
        return result;
    }
    async updateWithTranslation(id, { translations, ...body }) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        let result = null;
        await this.dataSource.transaction(async (entityManager) => {
            const data = await entityManager.preload(_model_1.Post, {
                id,
                ...body,
            });
            if (!data) {
                throw new common_1.BadRequestException(i18n.t('common.Data id not found', { args: { id } }));
            }
            if (!data.createdAt) {
                throw new common_1.BadRequestException(i18n.t('common.Data id not found', { args: { id } }));
            }
            result = await this.save(data);
            if (translations) {
                result.translations = [];
                for (const item of translations) {
                    const existingName = await entityManager
                        .createQueryBuilder(_model_1.PostTranslation, 'base')
                        .andWhere(`base.name=:name`, { name: item.name })
                        .andWhere(`base.language=:language`, { language: item.language })
                        .andWhere(`base.postId != :postId`, { postId: id })
                        .withDeleted()
                        .getCount();
                    if (existingName)
                        throw new common_1.BadRequestException(i18n.t('common.Data.Name is already taken'));
                    const data = await entityManager.save(await entityManager.preload(_model_1.PostTranslation, { postId: result.id, ...item }));
                    if (data)
                        result.translations.push(data);
                }
            }
        });
        return result;
    }
};
exports.PostRepository = PostRepository;
exports.PostRepository = PostRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], PostRepository);
//# sourceMappingURL=post.repository.js.map