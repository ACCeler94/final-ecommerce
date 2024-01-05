import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClothesController } from './clothes/clothes.controller';
import { ClothesModule } from './clothes/clothes.module';

@Module({
  imports: [ClothesModule],
  controllers: [AppController, ClothesController],
  providers: [AppService],
})
export class AppModule {}
