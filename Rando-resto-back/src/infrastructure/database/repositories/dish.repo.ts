import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DishRepository } from 'src/application/repositories/dish.repository';
import { DishQueryFilter } from 'src/application/services/dish-query-filter';
import { Dish } from 'src/domain/models/dish';
import { Ingredient } from 'src/domain/models/ingredient';
import { Repository, SubjectRemovedAndUpdatedError } from 'typeorm';
import { DishEntity } from '../mapper/dish.entity';

@Injectable()
export class DishRepo implements DishRepository {
  constructor(
    @InjectRepository(DishEntity)
    private typeormDishRepo: Repository<DishEntity>,
  ) {}
  find(): Promise<Dish[]> {
    return this.typeormDishRepo.find({ relations: ['components'] });
  }

  createDish(dish: Dish): Promise<Dish> {
    return this.typeormDishRepo.save(dish);
  }
  async findRandomDish(filter: DishQueryFilter): Promise<Dish> {
    let dishes = await this.typeormDishRepo.find({
      relations: ['components', 'components.ingredient'],
    });

    if (filter?.calories != null)
      dishes = dishes.filter((d) => d.getCalories() <= filter.calories);

    if (filter?.ingredientIDs != null) {
      for (const ingredientId of filter.ingredientIDs) {
        dishes = dishes.filter(
          (d) => !d.components.some((c) => c.ingredient.id === ingredientId),
        );
      }
    }

    return dishes[0];
  }
}
