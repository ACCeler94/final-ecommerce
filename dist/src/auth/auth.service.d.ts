import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    register(registrationData: any): Promise<import(".prisma/client").User>;
    validateUser(email: string, password: string): Promise<{
        id: string;
        email: string;
        name: string;
        street: string;
        zip: string;
        city: string;
        role: import(".prisma/client").Role;
    }>;
    createSession(user: any): Promise<{
        access_token: string;
    }>;
}
