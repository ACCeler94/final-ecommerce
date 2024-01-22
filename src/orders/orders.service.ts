import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAllOrders(): Promise<Order[]> {
    return this.prismaService.order.findMany();
  }

  public getOrderById(id: Order['id']): Promise<Order> {
    return this.prismaService.order.findUnique({
      where: { id },
    });
  }

  public async createOrder(userData, products): Promise<Order> | null {
    try {
      const createdOrder = await this.prismaService.order.create({
        data: {
          userData,
        },
      });

      for (const product of products) {
        await this.prismaService.productOnOrder.create({
          data: {
            orderId: createdOrder.id,
            productId: product.id,
            quantity: product.quantity,
          },
        });
      }

      const completeOrder = await this.prismaService.order.findUnique({
        where: { id: createdOrder.id },
        include: { Products: true },
      });

      return completeOrder;
    } catch (error) {
      throw error;
    }
  }
}
