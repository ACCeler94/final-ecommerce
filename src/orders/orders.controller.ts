/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import validateProductId from 'src/utils/validateProductId';
import { CreateOrderDto } from './dtos/CreateOrder.dto';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  //[TODO] check if user is admin to access this data
  //@UseGuards(AuthenticatedGuard)
  @Get('/')
  getOrders() {
    return this.ordersService.getAllOrders();
  }

  // [TODO] check if user is an author or admin to access this data
  //@UseGuards(AuthenticatedGuard)
  @Get('/:id')
  async getOrderById(@Param('id', new ParseUUIDPipe()) id: 'string') {
    const order = await this.ordersService.getOrderById(id);
    if (!order) {
      throw new NotFoundException('Order not found.');
    }
    return order;
  }

  /*  [TODO] change back controller and service to get User from db instead of getting userData as string after registration functionality is implemented
  // [TODO] Change endpoint to get userId from req.user.id
  @UseGuards(AuthenticatedGuard)
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
  } */

  @Post('/')
  async createOrder(@Body() orderData: CreateOrderDto) {
    const { userData, products } = orderData;
    for (const product of products) {
      try {
        await validateProductId(product.id); // check if given product ids have a record in database
      } catch (error) {
        throw new BadRequestException(`Bad request ${error}`);
      }
    }
    //const userId = req.user.id;
    return await this.ordersService.createOrder(userData, products);
  }
}
