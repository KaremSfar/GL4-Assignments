import { Injectable } from '@nestjs/common';
import { Dish } from 'src/domain/models/dish';
import { CreateDishDataMapper } from '../data-model-mappers/dish-mappers';
import { CreateDishInputData } from '../input-data/dishes-data';
import { DishRepository } from '../repositories/dish.repository';
import { DishQueryFilter } from '../services/dish-query-filter';

@Injectable()
export class DishesInteractor {
  constructor(private dishRepository: DishRepository) {}

  createDish(createDish: CreateDishInputData): Promise<Dish> {
    return this.dishRepository.createDish(
      CreateDishDataMapper.toClass(createDish),
    );
  }

  getDishes(): Promise<Dish[]> {
    return this.dishRepository.find();
  }

  getRandomDish(filter: DishQueryFilter): Promise<Dish> {
    return this.dishRepository.findRandomDish(filter);
  }
}
