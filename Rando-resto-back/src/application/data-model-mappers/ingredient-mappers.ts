import { Ingredient } from 'src/domain/models/ingredient';
import { CreateIngredientInputData } from '../input-data/ingredient.data';

export class CreateIngredientDataMapper {
  static toClass(createIngredient: CreateIngredientInputData): Ingredient {
    const ingredient = new Ingredient();
    ingredient.ingredientName = createIngredient.ingredientName;
    ingredient.calories = createIngredient.calories;
    return ingredient;
  }
}
