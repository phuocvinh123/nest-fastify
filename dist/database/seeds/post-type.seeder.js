"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostTypeSeeder = void 0;
const _model_1 = require("../../src/model");
class PostTypeSeeder {
    async run(dataSource) {
        const repository = dataSource.getRepository(_model_1.PostType);
        const listData = [
            { name: 'News', code: 'news', isPrimary: true },
            { name: 'Projects', code: 'projects', isPrimary: true },
        ];
        for (const { children, ...data } of listData) {
            const dataExists = await repository
                .createQueryBuilder('base')
                .andWhere(`base.code=:code`, { code: data.code })
                .getOne();
            if (!dataExists) {
                const newData = repository.create(data);
                const parent = await repository.save(newData);
                if (children?.length) {
                    for (const item of children) {
                        const dataExists = await repository
                            .createQueryBuilder('base')
                            .andWhere(`base.code=:code`, { code: item.code })
                            .getOne();
                        if (!dataExists) {
                            const newData = repository.create(item);
                            newData.parent = parent;
                            await repository.save(newData);
                        }
                    }
                }
            }
        }
    }
}
exports.PostTypeSeeder = PostTypeSeeder;
//# sourceMappingURL=post-type.seeder.js.map