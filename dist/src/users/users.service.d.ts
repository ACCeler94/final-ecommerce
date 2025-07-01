import { Password, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getUsers(): Promise<User[]>;
    getUserById(id: User['id']): Promise<User>;
    getUserByEmail(email: User['email']): Promise<User & {
        password: Password;
    }>;
    createUser(userData: any, password: any): Promise<User>;
    editUser(id: User['id'], userData: any, password: string | undefined): Promise<User>;
    deleteUser(id: User['id']): Promise<User>;
}
