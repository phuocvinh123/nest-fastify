"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Public = exports.IS_PUBLIC_KEY = exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("..");
function Auth({ summary, permission, serializeOptions = { groups: [] }, tokenGuard = _shared_1.AccessTokenGuard, }) {
    const _permissionGuard = tokenGuard === _shared_1.AccessTokenGuard ? (0, _shared_1.PermissionGuard)(permission) : tokenGuard;
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary }), (0, common_1.SerializeOptions)(serializeOptions), (0, common_1.UseGuards)(tokenGuard, _permissionGuard), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Error: Unauthorized' }), (0, swagger_1.ApiForbiddenResponse)({ description: 'Error: Forbidden' }));
}
exports.Auth = Auth;
exports.IS_PUBLIC_KEY = 'isPublic';
function Public({ summary, serializeOptions = {}, }) {
    (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
    return (0, common_1.applyDecorators)((0, common_1.SerializeOptions)(serializeOptions), (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Error: Internal Server Error' }), (0, swagger_1.ApiOperation)({ summary }));
}
exports.Public = Public;
//# sourceMappingURL=http.decorators.js.map