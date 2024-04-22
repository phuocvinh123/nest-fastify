"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_extension_1 = require("typeorm-extension");
const _model_1 = require("../../src/model");
exports.default = (0, typeorm_extension_1.setSeederFactory)(_model_1.AddressWard, (faker) => {
    const data = new _model_1.AddressWard();
    data.code = '00001';
    data.name = faker.location.city();
    return data;
});
//# sourceMappingURL=address-ward.factory.js.map