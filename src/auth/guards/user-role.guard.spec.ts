import { Reflector } from '@nestjs/core';
import { UserRoleGuard } from './user-role.guard';
import { ExecutionContext } from '@nestjs/common';
import { createMock } from '@golevelup/ts-jest';
import { RolesEnum } from '../enums/roles.enum';
import { AGENT_ROLES, CUSTOMER_ROLES } from '../constants/roles.constants';

describe('UserRoleGuard', () => {
  let guard: UserRoleGuard;
  let reflector: Reflector;

  beforeEach(() => {
    reflector = new Reflector();
    guard = new UserRoleGuard(reflector);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  it('should return true if the role contains the guest role', () => {
    reflector.get = jest.fn().mockReturnValue([RolesEnum.GUEST]);
    const context = createMock<ExecutionContext>();

    const result = guard.canActivate(context);
    expect(result).toBe(true);
  });

  it('should return true if the user role is in valid role agent', () => {
    reflector.get = jest.fn().mockReturnValue([...AGENT_ROLES]);
    const context = createMock<ExecutionContext>();
    context.switchToHttp().getRequest.mockReturnValue({ user: { role: RolesEnum.AGENT } });
    const result = guard.canActivate(context);
    expect(result).toBe(true);
  });

  it('should return true if the user role is in valid role customer', () => {
    reflector.get = jest.fn().mockReturnValue([...CUSTOMER_ROLES]);
    const context = createMock<ExecutionContext>();
    context.switchToHttp().getRequest.mockReturnValue({ user: { role: RolesEnum.CUSTOMER } });
    const result = guard.canActivate(context);
    expect(result).toBe(true);
  });

  it('should return true if the admin role is in valid role Agent', () => {
    reflector.get = jest.fn().mockReturnValue([...AGENT_ROLES]);
    const context = createMock<ExecutionContext>();
    context.switchToHttp().getRequest.mockReturnValue({ user: { role: RolesEnum.ADMIN } });
    const result = guard.canActivate(context);
    expect(result).toBe(true);
  });

  it('should return true if the admin role is in valid role customer', () => {
    reflector.get = jest.fn().mockReturnValue([...CUSTOMER_ROLES]);
    const context = createMock<ExecutionContext>();
    context.switchToHttp().getRequest.mockReturnValue({ user: { role: RolesEnum.ADMIN } });
    const result = guard.canActivate(context);
    expect(result).toBe(true);
  });

  it('should return false if the role is not in valid role customer', () => {
    try {
      reflector.get = jest.fn().mockReturnValue([...CUSTOMER_ROLES]);
      const context = createMock<ExecutionContext>();
      context.switchToHttp().getRequest.mockReturnValue({ user: { role: RolesEnum.AGENT } });
      guard.canActivate(context);
    } catch (error) {
      console.log('error', error.message)
      expect(error.message).toBe('User not allowed, only (admin,customer) can access this route');
    }
  });

  it('should return false if the role is not in valid role agent', () => {
    try {
      reflector.get = jest.fn().mockReturnValue([...AGENT_ROLES]);
      const context = createMock<ExecutionContext>();
      context.switchToHttp().getRequest.mockReturnValue({ user: { role: RolesEnum.CUSTOMER } });
      guard.canActivate(context);
    } catch (error) {
      console.log('error', error.message)
      expect(error.message).toBe('User not allowed, only (admin,agent) can access this route');
    }
  });
});
