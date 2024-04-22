"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Headers = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
function Headers(name) {
    return (0, common_1.applyDecorators)((0, common_1.Controller)('/api/' + name), (0, swagger_1.ApiTags)(capitalizeFirstLetter(name)), (0, swagger_1.ApiHeader)({ name: 'Accept-Language' }), (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor));
}
exports.Headers = Headers;
const capitalizeFirstLetter = (string) => string
    .split('/')
    .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
    .join(' ');
//# sourceMappingURL=headers.js.map