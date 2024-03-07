import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/Register.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(registrationData: RegisterDTO): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        email: string;
        name: string;
        street: string;
        zip: string;
        city: string;
        role: import(".prisma/client").Role;
    }, unknown> & {}>;
    login(req: any, res: any): Promise<void>;
    logJWT(req: any, res: any): Promise<void>;
    logout(req: any, res: any): Promise<void>;
}
