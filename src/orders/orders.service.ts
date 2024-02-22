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
      include: { products: true },
    });
  }

  public async createOrder(
    orderData: CreateOrderDto,
    userId: string,
  ): Promise<Order> | null {
    try {
      const { userData, products, orderTotal } = orderData;

      const createdOrder = await this.prismaService.order.create({
        data: {
          name: userData.name,
          email: userData.email,
          shippingStreet: userData.shippingStreet,
          shippingCity: userData.shippingCity,
          shippingZip: userData.shippingZip,
          orderTotal: orderTotal,
          userId: userId,
        },
      });

      const productOnOrderCreations = products.map((productsElem) => {
        const productData: any = {
          orderId: createdOrder.id,
          productId: productsElem.product.id,
          quantity: productsElem.quantity,
          comment: productsElem.comment,
          size: productsElem.size,
        };

        return this.prismaService.productOnOrder.create({
          data: productData,
        });
      });

      await this.prismaService.$transaction(productOnOrderCreations);

      const completeOrder = await this.prismaService.order.findUnique({
        where: { id: createdOrder.id },
        include: { products: true },
      });

      return completeOrder;
    } catch (error) {
      throw error;
    }
  }
}
