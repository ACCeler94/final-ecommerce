import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/Register.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  signUp(@Body() registrationData: RegisterDTO) {
    return this.authService.register(registrationData);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  logIn(@Request() req) {
    return this.authService.login(req);
  }

  @Get('/logout')
  logOut(@Request() req) {
    return this.authService.logout(req);
  }
}
