import { BaseEntity } from '../shared/base.entity';
import { Ingredient } from './ingredient';

export class Component implements BaseEntity {
  id: string;

  ingredient: Ingredient;

  quantity: number;
}
