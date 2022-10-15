import { BaseEntity } from '../shared/base.entity';

export class Ingredient extends BaseEntity {
  ingredientName: string;

  calories: number;
}
