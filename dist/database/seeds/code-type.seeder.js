"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTypeSeeder = void 0;
const _model_1 = require("../../src/model");
class CodeTypeSeeder {
    async run(dataSource) {
        const listData = [
            {
                name: 'Position',
                code: 'position',
                isPrimary: true,
                items: [
                    { name: 'President & CEO', code: 'PC', type: 'position' },
                    { name: 'CCO', code: 'CCO', type: 'position' },
                    { name: 'Vice Director', code: 'VD', type: 'position' },
                    { name: 'Vice Director', code: 'VD', type: 'position' },
                    { name: 'Delivery Manager', code: 'DM', type: 'position' },
                    { name: 'CTO', code: 'CTO', type: 'position' },
                    { name: 'Admin', code: 'AD', type: 'position' },
                    { name: 'Accountant', code: 'ACC', type: 'position' },
                    { name: 'Ai Technical Leader', code: 'ATL', type: 'position' },
                    { name: 'Web-App Technical Leader', code: 'WATL', type: 'position' },
                    { name: 'Project Technical Leader', code: 'PTL', type: 'position' },
                    { name: 'Developer', code: 'DEV', type: 'position' },
                    { name: 'Engineer', code: 'ENG', type: 'position' },
                    { name: 'Business Analyst', code: 'BA', type: 'position' },
                    { name: 'Tester', code: 'TEST', type: 'position' },
                ],
            },
        ];
        for (const data of listData) {
            const repository = dataSource.getRepository(_model_1.CodeType);
            const dataExists = await repository
                .createQueryBuilder('base')
                .andWhere(`base.code=:code`, { code: data.code })
                .getOne();
            if (!dataExists) {
                const newData = repository.create(data);
                await repository.save(newData);
                if (data.items?.length) {
                    const repository = dataSource.getRepository(_model_1.Code);
                    for (const item of data.items) {
                        const dataExists = await repository
                            .createQueryBuilder('base')
                            .andWhere(`base.code=:code`, { code: item.code })
                            .getOne();
                        if (!dataExists) {
                            let newData = repository.create(item);
                            newData = await repository.save(newData);
                        }
                    }
                }
            }
        }
    }
}
exports.CodeTypeSeeder = CodeTypeSeeder;
//# sourceMappingURL=code-type.seeder.js.map