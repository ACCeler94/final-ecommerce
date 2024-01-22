import { ConflictException, Injectable } from '@nestjs/common';
import { Password, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  public getUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  public getUserById(id: User['id']): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { id },
      //include: { orders: true },
    });
  }

  public getUserByEmail(
    email: User['email'],
  ): Promise<User & { password: Password }> {
    return this.prismaService.user.findUnique({
      where: { email },
      include: { password: true },
    });
  }

  public async createUser(userData, password) {
    try {
      return await this.prismaService.user.create({
        data: {
          ...userData,
          password: {
            create: {
              hashedPassword: password,
            },
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2002')
        throw new ConflictException('Email is already used');
    }
  }

  public async editUser(
    id: User['id'],
    userData,
    password: string | undefined,
  ) {
    if (password) {
      return await this.prismaService.user.update({
        where: { id },
        data: {
          ...userData,
          password: {
            update: {
              hashedPassword: password,
            },
          },
        },
      });
    } else {
      return await this.prismaService.user.update({
        where: { id },
        data: userData,
      });
    }
  }

  public async deleteUser(id: User['id']): Promise<User> {
    return this.prismaService.user.delete({ where: { id } });
  }
}
