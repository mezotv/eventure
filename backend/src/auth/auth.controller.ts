import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsOptional, IsString } from 'class-validator';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './jwtData.decorator';

export class LoginParamsDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  email?: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  fullname?: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  password: string;
}

export class RegisterParamsDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  fullName: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  email: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('test')
  test() {
    return 'hi';
  }

  @Get('register')
  aa() {
    return 'hi';
  }

  @Post('register')
  async register(@Body() body: RegisterParamsDto) {
    return this.authService.register(body);
  }

  @Post('login')
  async login(@Body() body: LoginParamsDto) {
    return this.authService.login(body);
  }

  @Post('refresh-token')
  async refreshToken(@Body('refreshToken') refreshToken: string) {
    return this.authService.refreshToken(refreshToken);
  }

  @Post('logout')
  @UseGuards(AuthGuard('jwt'))
  async logout(
    @GetUser('sub') userId: string,
    @Body('refreshToken') refreshToken?: string,
  ) {
    return this.authService.logout(userId, refreshToken);
  }
}
