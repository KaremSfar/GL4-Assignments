import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { IngredientCreateDto } from '../dtos/ingredient.dto';

import { RolesGuard } from 'src/infrastructure/common/guards-module/guards/roles.guard';
import { Roles } from 'src/infrastructure/common/guards-module/decorators/roles.decorator';
import { Role } from 'src/domain/models/role.enum';
import { IngredientsInteractor } from 'src/application/use-cases/ingredients-interactor';
import { Ingredient } from 'src/domain/models/ingredient';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Ingredients')
@Controller('/ingredients')
export class IngredientController {
  constructor(private ingredientInteractor : IngredientsInteractor) {}

  @Get()
  getIngredient(): Promise<Ingredient[]> {
    return this.ingredientInteractor.getIgredients();
  }

  @UseGuards(RolesGuard)
  @Roles(Role.RestoOwner)
  @Post()
  createIngredient(
    @Body() ingredientCreateDto: IngredientCreateDto,
  ): Promise<Ingredient> {
    return this.ingredientInteractor.createIngredient(ingredientCreateDto);
  }
}
