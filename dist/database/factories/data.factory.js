"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_extension_1 = require("typeorm-extension");
const _model_1 = require("../../src/model");
exports.default = (0, typeorm_extension_1.setSeederFactory)(_model_1.Data, (faker) => {
    const data = new _model_1.Data();
    data.name = faker.person.jobType();
    data.type = faker.string.alpha({ length: 3, casing: 'upper', exclude: ['A'] });
    data.image = faker.image.url();
    data.translations = [
        {
            language: 'vn',
            name: faker.lorem.sentence(4),
            description: faker.lorem.paragraph(),
        },
        {
            language: 'en',
            name: faker.lorem.sentence(4),
            description: faker.lorem.paragraph(),
        },
    ];
    data.order = 1;
    return data;
});
//# sourceMappingURL=data.factory.js.map