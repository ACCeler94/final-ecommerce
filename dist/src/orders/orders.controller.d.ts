import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dtos/CreateOrder.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getOrders(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        email: string;
        shippingStreet: string;
        shippingZip: string;
        shippingCity: string;
        orderTotal: number;
        createdAt: Date;
        userId: string;
    }, unknown> & {})[]>;
    getOrderById(id: 'string'): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        email: string;
        shippingStreet: string;
        shippingZip: string;
        shippingCity: string;
        orderTotal: number;
        createdAt: Date;
        userId: string;
    }, unknown> & {}>;
    createOrder(orderData: CreateOrderDto, req: any): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        email: string;
        shippingStreet: string;
        shippingZip: string;
        shippingCity: string;
        orderTotal: number;
        createdAt: Date;
        userId: string;
    }, unknown> & {}>;
}
