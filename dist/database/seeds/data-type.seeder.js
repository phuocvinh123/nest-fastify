"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTypeSeeder = void 0;
const _model_1 = require("../../src/model");
class DataTypeSeeder {
    async run(dataSource) {
        const repository = dataSource.getRepository(_model_1.DataType);
        const listData = [
            { name: 'Mission', code: 'mission', isPrimary: true },
            { name: 'Services', code: 'services', isPrimary: true },
            { name: 'Value', code: 'value', isPrimary: true },
            { name: 'Member', code: 'member', isPrimary: true },
            { name: 'Tech', code: 'tech', isPrimary: true },
            { name: 'Partner', code: 'partner', isPrimary: true },
        ];
        for (const data of listData) {
            const dataExists = await repository
                .createQueryBuilder('base')
                .andWhere(`base.code=:code`, { code: data.code })
                .getOne();
            if (!dataExists) {
                const newData = repository.create(data);
                await repository.save(newData);
            }
        }
    }
}
exports.DataTypeSeeder = DataTypeSeeder;
//# sourceMappingURL=data-type.seeder.js.map