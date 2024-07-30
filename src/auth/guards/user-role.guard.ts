import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { META_ROLES } from "../decorators/role-protected.decorator";
import { RolesEnum } from "../enums/roles.enum";
import { JwtBody } from "../types/jwt-body.types";


@Injectable()
export class UserRoleGuard implements CanActivate {

  constructor(private readonly reflector: Reflector){}


  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles = this.reflector.get<string[]>(META_ROLES, context.getHandler());
    const req = context.switchToHttp().getRequest();
    const user:JwtBody = req.user;

    if(validRoles.includes(RolesEnum.GUEST)) return true;

    if(!user) throw new UnauthorizedException('User not Found');
    if(!validRoles) return true;
    if(validRoles.length === 0) return true;
    const isValid = validRoles.includes(user.role);
    if(!isValid) throw new UnauthorizedException(`User not allowed, only (${validRoles}) can access this route`);
    return true;
  }
}
