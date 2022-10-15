import { Module } from '@nestjs/common';
import { IngredientController } from './controllers/ingredient.controller';
import { IngredientsInteractor } from 'src/application/use-cases/ingredients-interactor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientEntity } from 'src/infrastructure/database/mapper/ingredient.entity';
import { IngredientsRepository } from 'src/infrastructure/database/repositories/ingredient.repository';
import { IngredientRepository } from 'src/application/repositories/ingredient.repository';

@Module({
  imports: [TypeOrmModule.forFeature([IngredientEntity])],
  providers: [
    IngredientsInteractor,
    { provide: IngredientRepository, useClass: IngredientsRepository },
  ],
  controllers: [IngredientController],
})
export class IngredientsModule {}
