import { Dish } from 'src/domain/models/dish';
import { DishQueryFilter } from '../services/dish-query-filter';

export abstract class DishRepository {
  abstract createDish(dish: Dish): Promise<Dish>;

  // Returns the Components with it
  abstract find(): Promise<Dish[]>;

  abstract findRandomDish(filter: DishQueryFilter): Promise<Dish>;
}
