import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtBody } from '../types/jwt-body.types';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtBody): Promise<JwtBody> {
    const { userId } = payload;
    if(!userId) throw new UnauthorizedException('token not valid');
    const user = await this.userRepository.findOneBy({id: userId});
    if(!user) throw new UnauthorizedException('user not found');
    return {
      userId: user.id,
      email: user.email,
      role: user.role.name,
    };
  }
}
