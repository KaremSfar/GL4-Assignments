import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class SujetPfeDtoUpdate {
  @ApiProperty()
  @MinLength(10)
  @IsOptional()
  title: string;

  @ApiProperty()
  @MinLength(30)
  @IsOptional()
  description: string;

  @ApiProperty()
  @MinLength(5)
  @IsOptional()
  domain: string;

  @ApiProperty()
  @IsOptional()
  year: number; //TODO: default this year

  @ApiProperty()
  @IsOptional()
  rapportPfe: number;
}
