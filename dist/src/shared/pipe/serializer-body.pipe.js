"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializerBody = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class SerializerBody {
    constructor(group) {
        this.group = group;
    }
    async transform(value, { metatype }) {
        if (!metatype)
            return value;
        const object = (0, class_transformer_1.plainToInstance)(metatype, value, { groups: this.group });
        const errors = await (0, class_validator_1.validate)(object, {
            whitelist: true,
            transform: true,
            forbidNonWhitelisted: true,
            transformOptions: {
                enableImplicitConversion: false,
            },
        });
        if (errors.length > 0) {
            throw new common_1.BadRequestException(errors
                .map((e) => {
                const collect = [];
                for (const key in e.constraints) {
                    collect.push(e.constraints[key]);
                }
                return collect;
            })
                .flat());
        }
        return (0, class_transformer_1.plainToClass)(metatype, value, { groups: this.group });
    }
}
exports.SerializerBody = SerializerBody;
//# sourceMappingURL=serializer-body.pipe.js.map