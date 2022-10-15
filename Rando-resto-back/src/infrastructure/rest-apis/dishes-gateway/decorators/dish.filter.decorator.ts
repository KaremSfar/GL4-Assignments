import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { DishQueryFilter } from 'src/application/services/dish-query-filter';

export const DishFilter = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const dishQueryFilter = new DishQueryFilter();
    const request = ctx.switchToHttp().getRequest();
    dishQueryFilter.calories = request.query.calories;
    dishQueryFilter.ingredientIDs = request.query.ingredients?.split(',');
    return dishQueryFilter;
  },
);
