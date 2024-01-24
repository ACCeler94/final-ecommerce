import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    register(registrationData: any): Promise<import(".prisma/client").User>;
    validateUser(email: string, password: string): Promise<{
        id: string;
        email: string;
        name: string;
        address: string;
    }>;
    login(req: any): Promise<{
        User: any;
        message: string;
    }>;
    logout(req: any): Promise<{
        message: string;
    }>;
}
