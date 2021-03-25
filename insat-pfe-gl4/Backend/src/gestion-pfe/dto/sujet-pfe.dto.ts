import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class SujetPfeDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(10)
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(30)
  description: string;

  @ApiProperty()
  @MinLength(5)
  domain: string;

  @ApiProperty()
  year: number; //TODO: default this year

  @ApiProperty()
  rapportPfe: number;
}
