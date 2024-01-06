import { ConflictException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
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
      include: { orders: true },
    });
  }

  public async createUser(userData: Omit<User, 'id'>): Promise<User> {
    try {
      return await this.prismaService.user.create({ data: userData });
    } catch (error) {
      if (error.code === 'P2002')
        throw new ConflictException('Email is already taken');

      throw error;
    }
  }

  public async updateUser(userData, id: User['id']): Promise<User> {
    try {
      return await this.prismaService.user.update({
        where: { id },
        data: userData,
      });
    } catch (error) {
      if (error.code === 'P2002')
        throw new ConflictException('Email is already taken');

      throw error;
    }
  }

  public async deleteUser(id: User['id']): Promise<User> {
    return this.prismaService.user.delete({ where: { id } });
  }
}
