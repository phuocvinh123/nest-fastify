"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_extension_1 = require("typeorm-extension");
const _model_1 = require("../../src/model");
exports.default = (0, typeorm_extension_1.setSeederFactory)(_model_1.AddressProvince, (faker) => {
    const data = new _model_1.AddressProvince();
    data.code = '10';
    data.name = faker.location.city();
    return data;
});
//# sourceMappingURL=address-province.factory.js.map