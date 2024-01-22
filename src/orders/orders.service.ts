import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dtos/CreateOrder.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAllOrders(): Promise<Order[]> {
    return this.prismaService.order.findMany();
  }

  public getOrderById(id: Order['id']): Promise<Order> {
    return this.prismaService.order.findUnique({
      where: { id },
      include: { Products: true },
    });
  }

  public async createOrder(orderData: CreateOrderDto): Promise<Order> | null {
    try {
      const { userData, products, orderTotal } = orderData;
      const createdOrder = await this.prismaService.order.create({
        data: {
          name: userData.name,
          email: userData.email,
          address: userData.address,
          orderTotal: orderTotal,
        },
      });

      for (const productsElem of products) {
        const productData: any = {
          orderId: createdOrder.id,
          productId: productsElem.product.id,
          quantity: productsElem.quantity,
          comment: productsElem.comment,
        };

        await this.prismaService.productOnOrder.create({
          data: productData,
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
