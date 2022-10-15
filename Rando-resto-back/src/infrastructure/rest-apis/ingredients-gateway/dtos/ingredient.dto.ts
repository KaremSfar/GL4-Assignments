import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateIngredientInputData } from 'src/application/input-data/ingredient.data';

export class IngredientCreateDto extends CreateIngredientInputData {
  @IsNotEmpty()
  @ApiProperty()
  ingredientName: string;

  @IsNotEmpty()
  @ApiProperty({
    description:
      'The calories by unit of this ingredient, (for exemple the calories in 100gr) goes in conjuction with the component object',
  })
  calories: number;
}
