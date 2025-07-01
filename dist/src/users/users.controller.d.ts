import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<import(".prisma/client").User[]>;
    getUserById(req: any): Promise<import(".prisma/client").User>;
    deleteUser(req: any): Promise<{
        message: string;
    }>;
}
