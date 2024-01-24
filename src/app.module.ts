import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import * as cors from 'cors';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ProductsModule,
    PrismaModule,
    OrdersModule,
    UsersModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../public'),
      serveRoot: '/photos',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../client', 'dist'),
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(cors()).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
