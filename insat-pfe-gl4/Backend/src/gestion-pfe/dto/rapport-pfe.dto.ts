import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RapportPfeDto {
  @ApiProperty()
  @IsNotEmpty()
  isPublic: boolean;
}
