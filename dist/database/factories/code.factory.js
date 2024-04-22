"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_extension_1 = require("typeorm-extension");
const _model_1 = require("../../src/model");
exports.default = (0, typeorm_extension_1.setSeederFactory)(_model_1.Code, (faker) => {
    const data = new _model_1.Code();
    data.name = faker.person.jobType();
    data.code = faker.finance.bic();
    data.type = faker.finance.bic();
    data.description = faker.lorem.paragraph();
    return data;
});
//# sourceMappingURL=code.factory.js.map