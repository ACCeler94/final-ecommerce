import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import validateProductId from 'src/utils/validateProductId';
import { CreateOrderDto } from './dtos/CreateOrder.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  getOrders() {
    return this.ordersService.getAllOrders();
  }

  @Get('/:id')
  async getOrderById(@Param('id', new ParseUUIDPipe()) id: 'string') {
    const order = await this.ordersService.getOrderById(id);
    if (!order) {
      throw new NotFoundException('Order not found.');
    }
    return order;
  }

  // [TODO] Add auth guards to allow only registered users to create an order
  // [TODO] Change endpoint to get userId from req.user.id
  @Post('/')
  async createOrder(@Body() orderData: CreateOrderDto) {
    const { userId, products } = orderData;
    for (const product of products) {
      try {
        await validateProductId(product.id); // check if given product ids have a record in database
      } catch (error) {
        throw new BadRequestException(`Bad request ${error}`);
      }
    }
    //const userId = req.user.id;
    return await this.ordersService.createOrder(userId, products);
  }
}
