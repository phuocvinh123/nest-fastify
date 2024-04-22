"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_extension_1 = require("typeorm-extension");
const _model_1 = require("../../src/model");
const _shared_1 = require("../../src/shared");
exports.default = (0, typeorm_extension_1.setSeederFactory)(_model_1.User, (faker) => {
    const data = new _model_1.User();
    data.avatar = faker.image.url();
    data.name = faker.person.fullName();
    data.password = _shared_1.Example.password;
    data.email = faker.internet.email().toLowerCase();
    data.phoneNumber = faker.finance.accountNumber(12);
    data.dob = faker.date.birthdate();
    data.description = faker.lorem.paragraph();
    data.startDate = faker.date.past();
    data.dateLeave = faker.number.int({ min: 0.5, max: 12 });
    return data;
});
//# sourceMappingURL=user.factory.js.map