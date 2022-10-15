import { ApiProperty } from '@nestjs/swagger';
import { CreateDishInputData } from 'src/application/input-data/dishes-data';

export class CreateDishDto implements CreateDishInputData {
  @ApiProperty()
  dishName: string;

  @ApiProperty()
  componentsIds: string[];

  // TODO: get rid of this and add mappers
  // Not gonna be used, only coz lazy
  // Interface segregation principle ... :')
  // this is not an api property
  restoId: string;
}
