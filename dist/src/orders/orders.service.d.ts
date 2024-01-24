import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dtos/CreateOrder.dto';
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAllOrders(): Promise<Order[]>;
    getOrderById(id: Order['id']): Promise<Order>;
    createOrder(orderData: CreateOrderDto): Promise<Order> | null;
}
