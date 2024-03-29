import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');

  if (process.env.NODE_ENV !== 'production') {
    app.enableCors();
  }

  if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
  }

  app.use(cookieParser());
  await app.enableShutdownHooks();
  await app.listen(configService.get('port'));
}
bootstrap();
