"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_extension_1 = require("typeorm-extension");
const _model_1 = require("../../src/model");
exports.default = (0, typeorm_extension_1.setSeederFactory)(_model_1.DataType, (faker) => {
    const data = new _model_1.DataType();
    data.name = faker.person.jobType();
    data.code = faker.finance.bic();
    return data;
});
//# sourceMappingURL=data-type.factory.js.map