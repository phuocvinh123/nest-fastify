"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionGuard = void 0;
const common_1 = require("@nestjs/common");
const _shared_1 = require("..");
const PermissionGuard = (permission) => {
    class PermissionGuardMixin extends _shared_1.AccessTokenGuard {
        async canActivate(context) {
            await super.canActivate(context);
            if (permission) {
                const request = context.switchToHttp().getRequest();
                const user = request.user;
                if (!user ||
                    !user?.role?.permissions ||
                    (!user?.role?.isSystemAdmin && !user?.role?.permissions.includes(permission))) {
                    return false;
                }
            }
            return true;
        }
    }
    return (0, common_1.mixin)(PermissionGuardMixin);
};
exports.PermissionGuard = PermissionGuard;
//# sourceMappingURL=permission.guard.js.map