import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        email: string;
        name: string;
        street: string;
        zip: string;
        city: string;
        role: import(".prisma/client").Role;
    }, unknown> & {})[]>;
    getUserById(req: any): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        email: string;
        name: string;
        street: string;
        zip: string;
        city: string;
        role: import(".prisma/client").Role;
    }, unknown> & {}>;
    deleteUser(req: any): Promise<{
        message: string;
    }>;
}
