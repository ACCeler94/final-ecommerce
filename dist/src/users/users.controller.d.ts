import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<import(".prisma/client").User[]>;
    getUserById(id: 'string'): Promise<import(".prisma/client").User>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
}
