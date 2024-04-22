"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_extension_1 = require("typeorm-extension");
const _model_1 = require("../../src/model");
exports.default = (0, typeorm_extension_1.setSeederFactory)(_model_1.Address, (faker) => {
    const data = new _model_1.Address();
    data.specificAddress = faker.lorem.paragraph();
    return data;
});
//# sourceMappingURL=address.factory.js.map