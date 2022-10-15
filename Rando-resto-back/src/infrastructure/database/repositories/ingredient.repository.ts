import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IngredientRepository } from 'src/application/repositories/ingredient.repository';
import { Ingredient } from 'src/domain/models/ingredient';
import { Repository } from 'typeorm';
import { IngredientEntity } from '../mapper/ingredient.entity';
@Injectable()
export class IngredientsRepository implements IngredientRepository {
  constructor(
    @InjectRepository(IngredientEntity)
    private typeormIngredientsRepo: Repository<IngredientEntity>,
  ) {}

  find(): Promise<Ingredient[]> {
    return this.typeormIngredientsRepo.find();
  }
  createIngredient(ingredient: Ingredient): Promise<Ingredient> {
    return this.typeormIngredientsRepo.save(ingredient);
  }
}
