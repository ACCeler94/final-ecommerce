import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  public async register(registrationData) {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    const userData = {
      email: registrationData.email,
      name: registrationData.name,
      street: registrationData.street,
      city: registrationData.city,
      zip: registrationData.zip,
    };
    return this.usersService.createUser(userData, hashedPassword);
  }

  public async validateUser(email: string, password: string) {
    const user = await this.usersService.getUserByEmail(email);
    if (
      user &&
      (await bcrypt.compare(password, user.password.hashedPassword))
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  public async login(req) {
    return { User: req.user, message: 'User logged in' };
  }

  public async logout(req) {
    req.session.destroy();
    return { message: 'The user session has ended' };
  }
}
