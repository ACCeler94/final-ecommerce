import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // use AdminAuthGuard to allow only admin to access this data
  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Get('/')
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/userData')
  async getUserById(@Request() req) {
    const user = await this.usersService.getUserById(req.user.id);
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete')
  async deleteUser(@Request() req) {
    const user = await this.usersService.getUserById(req.user.id);
    if (!user) {
      throw new NotFoundException('User not found.');
    }

    await this.usersService.deleteUser(req.user.id);
    return { message: 'success' };
  }
}
