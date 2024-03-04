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
  Request,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import validateProductId from 'src/utils/validateProductId';
import { CreateOrderDto } from './dtos/CreateOrder.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  // use AdminAuthGuard to allow only admin to access this data
  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Get('/')
  getOrders() {
    return this.ordersService.getAllOrders();
  }

  // use AdminAuthGuard to allow only admin to access this data
  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async getOrderById(@Param('id', new ParseUUIDPipe()) id: 'string') {
    const order = await this.ordersService.getOrderById(id);
    if (!order) {
      throw new NotFoundException('Order not found.');
    }
    return order;
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async createOrder(@Body() orderData: CreateOrderDto, @Request() req) {
    const { products } = orderData;
    const userId = req.user.id;
    for (const productsElem of products) {
      try {
        await validateProductId(productsElem.product.id); // check if given product ids have a record in database
      } catch (error) {
        throw new BadRequestException(`Bad request ${error}`);
      }
    }
    return await this.ordersService.createOrder(orderData, userId);
  }
}
