"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_extension_1 = require("typeorm-extension");
const _model_1 = require("../../src/model");
exports.default = (0, typeorm_extension_1.setSeederFactory)(_model_1.Parameter, (faker) => {
    const data = new _model_1.Parameter();
    data.code = faker.finance.bic();
    data.vn = faker.lorem.paragraph();
    data.en = faker.lorem.paragraph();
    return data;
});
//# sourceMappingURL=parameter.factory.js.map