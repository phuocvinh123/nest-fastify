"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSeeder = void 0;
const typeorm_extension_1 = require("typeorm-extension");
const seeds_1 = require("./seeds");
class MainSeeder {
    async run(dataSource) {
        await (0, typeorm_extension_1.runSeeder)(dataSource, seeds_1.CodeTypeSeeder);
        await (0, typeorm_extension_1.runSeeder)(dataSource, seeds_1.DataTypeSeeder);
        await (0, typeorm_extension_1.runSeeder)(dataSource, seeds_1.ParameterSeeder);
        await (0, typeorm_extension_1.runSeeder)(dataSource, seeds_1.PostTypeSeeder);
        await (0, typeorm_extension_1.runSeeder)(dataSource, seeds_1.UserSeeder);
        await (0, typeorm_extension_1.runSeeder)(dataSource, seeds_1.AddressProvinceSeeder);
    }
}
exports.MainSeeder = MainSeeder;
//# sourceMappingURL=main.seeder.js.map