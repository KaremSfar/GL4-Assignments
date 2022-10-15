import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateComponentInputData } from 'src/application/input-data/component-data';

export class CreateComponentDto extends CreateComponentInputData {
  @IsNotEmpty()
  @ApiProperty()
  ingredientId: string;

  @IsNotEmpty()
  @ApiProperty({
    description:
      'The quantity in conjuction to the unit used to define the ingredient',
  })
  quantity: number;
}
