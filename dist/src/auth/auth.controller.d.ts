import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/Register.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(registrationData: RegisterDTO): Promise<import(".prisma/client").User>;
    logIn(req: any): Promise<{
        User: any;
        message: string;
    }>;
    logOut(req: any): Promise<{
        message: string;
    }>;
}
