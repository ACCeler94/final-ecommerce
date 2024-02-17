import {
  Body,
  Controller,
  Delete,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/Register.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  signUp(@Body() registrationData: RegisterDTO) {
    return this.authService.register(registrationData);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req, @Response() res) {
    const maxAge = 12 * 60 * 60 * 1000; // set to 12h, equal to jwt token lifespan
    const tokens = await this.authService.createSession(req.user);
    res.cookie('auth', tokens, { httpOnly: true, maxAge });
    res.send({
      message: 'success',
      userId: req.user.id,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/logout')
  async logout(@Request() req, @Response() res) {
    res.clearCookie('auth', { httpOnly: true });
    res.send({
      message: 'success',
    });
  }
}
