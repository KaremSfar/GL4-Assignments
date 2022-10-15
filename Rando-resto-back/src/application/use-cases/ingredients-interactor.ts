import { Injectable } from '@nestjs/common';
import { Ingredient } from 'src/domain/models/ingredient';
import { CreateIngredientDataMapper } from '../data-model-mappers/ingredient-mappers';
import { CreateIngredientInputData } from '../input-data/ingredient.data';
import { IngredientRepository } from '../repositories/ingredient.repository';

@Injectable()
export class IngredientsInteractor {
  constructor(private ingredientsRepository: IngredientRepository) {}

  getIgredients(): Promise<Ingredient[]> {
    return this.ingredientsRepository.find();
  }

  createIngredient(
    createIngredientData: CreateIngredientInputData,
  ): Promise<Ingredient> {
    const ingredient = CreateIngredientDataMapper.toClass(createIngredientData);
    return this.ingredientsRepository.createIngredient(ingredient);
  }
}
