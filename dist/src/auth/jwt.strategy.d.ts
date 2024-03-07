import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private usersService;
    constructor(configService: ConfigService, usersService: UsersService);
    validate(payload: any): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        email: string;
        name: string;
        street: string;
        zip: string;
        city: string;
        role: import(".prisma/client").Role;
    }, unknown> & {}>;
}
export {};
