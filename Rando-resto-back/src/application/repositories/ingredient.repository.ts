import { Ingredient } from 'src/domain/models/ingredient';

export abstract class IngredientRepository {
  abstract find(): Promise<Ingredient[]>;

  abstract createIngredient(Ingredient): Promise<Ingredient>;
}
