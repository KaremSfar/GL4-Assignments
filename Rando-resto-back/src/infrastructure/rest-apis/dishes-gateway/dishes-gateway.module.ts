import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishRepository } from 'src/application/repositories/dish.repository';
import { DishesInteractor } from 'src/application/use-cases/dishes-interactor';
import { DishEntity } from 'src/infrastructure/database/mapper/dish.entity';
import { DishRepo } from 'src/infrastructure/database/repositories/dish.repo';
import { DishesConsumerController } from './dishes/dishes-consumer.controller';
import { DishesRestoController } from './dishes/dishes-resto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DishEntity])],
  providers: [
    DishesInteractor,
    { provide: DishRepository, useClass: DishRepo },
  ],
  controllers: [DishesRestoController, DishesConsumerController],
})
export class DishesGatewayModule {}
