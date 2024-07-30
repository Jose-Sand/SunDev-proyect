import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { AuthService } from './../services/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from '../decorators/auth.decorator';
import { RolesEnum } from '../enums/roles.enum';

@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(201)
  @ApiOperation({ summary: 'Create a user', description:  `Required roles: ${RolesEnum.GUEST}` })
  @ApiResponse({
    status: 201,
    description: 'Register a new user',
    schema: {
      example: {
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5IiwiZW1haWwiOiJlbWFpbEBkZW1vLmNvbSIsImlhdCI6MTY1MjA0NzQzNSwiZXhwIjoxNjUyMTMzODM1fQ.ikFigJQn1ttuPAV06Yjr4PL6lKvm_HMygcTU8N1P__0',
      },
    },
  })
  @ApiResponse({
    status: 409,
    description: 'User already registered',
    schema: {
      example: {
        statusCode: 409,
        message: 'USER_ALREADY_REGISTERED',
      },
    },
  })
  async register(@Body() createUserDto: CreateUserDto): Promise<any> {
    const user = await this.authService.userExists(createUserDto.email);
    if (user) {
      throw new HttpException('USER_ALREADY_REGISTERED', HttpStatus.CONFLICT);
    }
    return await this.authService.createUser(createUserDto);
  }

  @Post('login')
  @Auth(RolesEnum.GUEST)
  @HttpCode(200)
  @ApiOperation({ summary: 'Login User', description:  `Required roles: ${RolesEnum.GUEST}` })
  @ApiBody({
    schema: {
      example: {
        email: 'email@demo.com',
        password: 'password',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Get a new access token with the credentials',
    schema: {
      example: {
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5IiwiZW1haWwiOiJlbWFpbEBkZW1vLmNvbSIsImlhdCI6MTY1MjA0NzQzNSwiZXhwIjoxNjUyMTMzODM1fQ.ikFigJQn1ttuPAV06Yjr4PL6lKvm_HMygcTU8N1P__0',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      example: {
        statusCode: 401,
        message: 'Unauthorized',
      },
    },
  })
  async login(@Req() req) {
    return this.authService.login(req.user);
  }
}
