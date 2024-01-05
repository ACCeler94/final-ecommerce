import { Module } from '@nestjs/common';
import { ClothesService } from './clothes.service';

@Module({
  providers: [ClothesService],
})
export class ClothesModule {}
