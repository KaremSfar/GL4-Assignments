import { Controller, Get } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { DishesInteractor } from 'src/application/use-cases/dishes-interactor';
import { DishQueryFilter } from '../../../../application/services/dish-query-filter';
import { DishFilter } from '../decorators/dish.filter.decorator';

@ApiTags('Consumer Dishes')
@Controller('dishes/consumer')
export class DishesConsumerController {
  constructor(private dishesInteractor: DishesInteractor) {}

  @ApiQuery({
    name: 'calories',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'ingredients',
    type: String,
    description: 'Comma seperated list of excluded ingredients IDs',
    required: false,
  })
  @Get()
  getRandomDish(@DishFilter() filter: DishQueryFilter) {
    return this.dishesInteractor.getRandomDish(filter);
  }
}
