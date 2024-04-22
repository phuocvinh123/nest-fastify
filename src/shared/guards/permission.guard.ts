import { CanActivate, ExecutionContext, Type, mixin } from '@nestjs/common';
import { AccessTokenGuard } from '@shared';

export const PermissionGuard = (permission?: string): Type<CanActivate> => {
  class PermissionGuardMixin extends AccessTokenGuard {
    async canActivate(context: ExecutionContext): Promise<boolean> {
      await super.canActivate(context);
      if (permission) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (
          !user ||
          !user?.role?.permissions ||
          (!user?.role?.isSystemAdmin && !user?.role?.permissions.includes(permission))
        ) {
          return false;
        }
      }
      return true;
    }
  }

  return mixin(PermissionGuardMixin);
};
