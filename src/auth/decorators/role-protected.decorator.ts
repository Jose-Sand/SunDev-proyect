import { SetMetadata } from '@nestjs/common';
import { RolesEnum } from '../enums/roles.enum';

export const META_ROLES = 'roles';

export const RoleProtected = (...args: RolesEnum[]) =>
  SetMetadata(META_ROLES, args);
