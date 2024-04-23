"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const dayjs_1 = __importDefault(require("dayjs"));
const StringUtils_1 = require("typeorm/util/StringUtils");
class BaseService {
    constructor(repo) {
        this.repo = repo;
        this.listQuery = [];
        this.listJoin = [];
        this.listJoinCount = [];
        this.listHistoryKey = [];
        this.joinColumn = [];
        this.listInnerJoin = [];
    }
    async findAll(paginationQuery) {
        const { where, perPage, page, fullTextSearch } = paginationQuery;
        const filter = typeof paginationQuery.filter === 'string' ? JSON.parse(paginationQuery.filter) : paginationQuery.filter;
        const skip = typeof paginationQuery.skip === 'string' ? JSON.parse(paginationQuery.skip) : paginationQuery.skip;
        const extend = typeof paginationQuery.extend === 'string' ? JSON.parse(paginationQuery.extend) : paginationQuery.extend;
        console.log(filter);
        const request = this.repo
            .createQueryBuilder('base')
            .andWhere('base.isDeleted = FALSE');
        if (this.listInnerJoin.length) {
            this.listInnerJoin.forEach((innerJoin) => {
                request.innerJoinAndSelect(`base.${innerJoin.key}`, innerJoin.key, `${innerJoin.key}.${innerJoin.condition}`);
            });
        }
        if (this.listJoin.length) {
            this.listJoin.forEach((key) => {
                const checkKey = key.split('.');
                request.leftJoinAndSelect(`${checkKey.length === 1 ? 'base.' + checkKey[0] : key}`, checkKey[checkKey.length - 1]);
            });
        }
        if (this.joinColumn.length) {
            this.joinColumn.forEach((key) => {
                const checkKey = key.split('.');
                request.leftJoin(`${checkKey.length === 1 ? 'base.' + checkKey[0] : key}`, checkKey[checkKey.length - 1]);
            });
        }
        if (where) {
            where.forEach((item) => {
                Object.keys(item).forEach((key) => {
                    const checkKey = key.split('.');
                    request.andWhere(`${checkKey.length === 1 ? 'base.' + checkKey[0] : key}=:${key}`, {
                        [key]: item[key],
                    });
                });
            });
        }
        if (filter && Object.keys(filter).length) {
            request.andWhere(new typeorm_1.Brackets((qb) => {
                Object.keys(filter).forEach((key) => {
                    if (typeof filter[key] === 'object' && filter[key]?.length > 0) {
                        if ((0, dayjs_1.default)(filter[key][0]).isValid()) {
                            qb = qb.andWhere(`base."${(0, StringUtils_1.snakeCase)(key)}" BETWEEN :startDate AND :endDate`, {
                                startDate: filter[key][0],
                                endDate: filter[key][1],
                            });
                        }
                        else {
                            const checkKey = key.split('.');
                            qb = qb.andWhere(`${checkKey.length === 1 ? 'base.' + checkKey[0] : key} IN (:...${key})`, {
                                [key]: filter[key],
                            });
                        }
                    }
                    else if (typeof filter[key] !== 'object') {
                        let checkFilter = key.split('.');
                        if (checkFilter.length > 1) {
                            if (filter[key] === 'NULL') {
                                qb = qb.andWhere(`${(key)} IS NULL`);
                            }
                            else if (filter[key] !== "") {
                                qb = qb.andWhere(`${(key)}=:${key}`, { [key]: filter[key] });
                            }
                            else {
                                qb = qb.andWhere(`${(key)} IS NOT NULL`);
                            }
                        }
                        else {
                            qb = qb.andWhere(`base.${(0, StringUtils_1.snakeCase)(key)}=:${key}`, { [key]: filter[key] });
                        }
                    }
                });
                if (skip && Object.keys(skip).length) {
                    Object.keys(skip).forEach((key) => {
                        if (typeof skip[key] === 'object' && skip[key].length > 0) {
                            if ((0, dayjs_1.default)(skip[key][0]).isValid()) {
                                qb = qb.andWhere(`"base.${(0, StringUtils_1.snakeCase)(key)}" NOT BETWEEN :startDate AND :endDate`, {
                                    startDate: skip[key][0],
                                    endDate: skip[key][1],
                                });
                            }
                            else {
                                const checkKey = key.split('.');
                                qb = qb.andWhere(`${checkKey.length === 1 ? 'base.' + (0, StringUtils_1.snakeCase)(checkKey[0]) : key} IN (:...${key})`, {
                                    [key]: skip[key],
                                });
                            }
                        }
                        else if (typeof skip[key] !== 'object') {
                            qb = qb.andWhere(`base.${(0, StringUtils_1.snakeCase)(key)}!=:${key}`, { [key]: skip[key] });
                        }
                    });
                }
            }));
        }
        if (fullTextSearch && this.listQuery.length) {
            request.andWhere(new typeorm_1.Brackets((qb) => {
                this.listQuery.forEach((key) => {
                    if (!filter || !filter[key]) {
                        qb = qb.orWhere(`base.${(0, StringUtils_1.snakeCase)(key)} like :${key}`, {
                            [key]: `%${fullTextSearch}%`,
                        });
                    }
                });
            }));
        }
        if (this.listJoinCount.length) {
            this.listJoinCount.forEach((item) => {
                request.loadRelationCountAndMap('base.' + item.name, 'base.' + item.key);
            });
        }
        let { sorts } = paginationQuery;
        if (typeof sorts === 'string')
            sorts = JSON.parse(sorts);
        if (sorts && Object.keys(sorts).length) {
            Object.keys(sorts).forEach((key) => {
                const checkKey = key.split('.');
                request.orderBy(`${checkKey.length === 1 ? 'base.' + checkKey[0] : key}`, sorts[key]);
            });
        }
        request.take(perPage || 10).skip((page !== undefined ? page - 1 : 0) * (perPage || 10));
        const res = await request.getManyAndCount();
        if (extend && Object.keys(extend).length) {
            let isGet = false;
            const request = this.repo.createQueryBuilder('base').andWhere(new typeorm_1.Brackets((qb) => {
                Object.keys(extend).forEach((key) => {
                    if (typeof extend[key] === 'object' && extend[key].length > 0) {
                        isGet = true;
                        if ((0, dayjs_1.default)(extend[key][0]).isValid()) {
                            qb = qb.andWhere(`"${key}" BETWEEN :startDate AND :endDate`, {
                                startDate: extend[key][0],
                                endDate: extend[key][1],
                            });
                        }
                        else {
                            const checkKey = key.split('.');
                            qb = qb.andWhere(`${checkKey.length === 1 ? 'base.' + checkKey[0] : key} IN (:...${key})`, {
                                [key]: extend[key],
                            });
                        }
                    }
                    else if (typeof extend[key] !== 'object') {
                        isGet = true;
                        qb = qb.andWhere(`base.${key}=:${key}`, { [key]: extend[key] });
                    }
                });
            }));
            if (isGet) {
                const data = await request.getMany();
                const ids = new Set(res[0].map((d) => d.id));
                res[0] = res[0].concat(data.filter((item) => !ids.has(item['id'])));
                res[1] = res[0].length;
            }
        }
        return [res[0], res[1]];
    }
    async findOne(id, listJoin = []) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        if (!id)
            throw new common_1.BadRequestException(i18n.t('common.Data id not found', { args: { id } }));
        const request = this.repo.createQueryBuilder('base');
        if (this.listJoin.length) {
            this.listJoin.forEach((key) => {
                const checkKey = key.split('.');
                request.leftJoinAndSelect(`${checkKey.length === 1 ? 'base.' + checkKey[0] : key}`, checkKey[checkKey.length - 1]);
            });
        }
        if (this.listInnerJoin.length) {
            this.listInnerJoin.forEach((innerJoin) => {
                request.innerJoinAndSelect(`base.${innerJoin.key}`, innerJoin.key, `${innerJoin.key}.${innerJoin.condition}`);
            });
        }
        if (listJoin.length) {
            listJoin.forEach((key) => {
                const checkKey = key.split('.');
                request.leftJoinAndSelect(`${checkKey.length === 1 ? 'base.' + checkKey[0] : key}`, checkKey[checkKey.length - 1]);
            });
        }
        const data = await request.where('base.id=:id', { id }).withDeleted().getOne();
        if (!data)
            throw new common_1.BadRequestException(i18n.t('common.Data id not found', { args: { id } }));
        return data;
    }
    async create(body) {
        const data = this.repo.create({ ...body });
        return this.repo.save(data);
    }
    async update(id, body, callBack) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        let data = await this.repo.preload({
            id,
            ...body,
        });
        if (!data) {
            throw new common_1.BadRequestException(i18n.t('common.Data id not found', { args: { id } }));
        }
        if (callBack)
            data = await callBack(data);
        return this.repo.save(data);
    }
    async remove(id) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        const res = await this.repo.softDelete(id);
        if (!res.affected) {
            throw new common_1.BadRequestException(i18n.t('common.Data id not found', { args: { id } }));
        }
        return await this.findOne(id, []);
    }
    async removeHard(id) {
        const data = await this.findOne(id, []);
        const res = await this.repo.delete(id);
        if (!res.affected) {
            const i18n = nestjs_i18n_1.I18nContext.current();
            throw new common_1.BadRequestException(i18n.t('common.Data id not found', { args: { id } }));
        }
        return data;
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map