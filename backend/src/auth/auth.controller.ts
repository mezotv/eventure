import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './jwtData.decorator';
import { RegisterParamsDto } from './entity/RegisterParams';
import { LoginParamsDto } from './entity/LoginParams';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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
