import { applyDecorators, UseGuards } from '@nestjs/common';
import { RoleProtected } from './role-protected.decorator';
import { RolesEnum } from '../enums/roles.enum';
import { UserRoleGuard } from '../guards/user-role.guard';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

export function Auth(...roles: RolesEnum[]) {
  const isGuest = roles.includes(RolesEnum.GUEST);
  const authGuards = isGuest ? LocalAuthGuard : JwtAuthGuard;
  return applyDecorators(
    RoleProtected(...roles),
    UseGuards(authGuards, UserRoleGuard),
  );
}
