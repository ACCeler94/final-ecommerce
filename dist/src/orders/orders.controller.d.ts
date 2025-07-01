import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dtos/CreateOrder.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getOrders(): Promise<import(".prisma/client").Order[]>;
    getOrderById(id: 'string'): Promise<import(".prisma/client").Order>;
    createOrder(orderData: CreateOrderDto, req: any): Promise<import(".prisma/client").Order>;
}
