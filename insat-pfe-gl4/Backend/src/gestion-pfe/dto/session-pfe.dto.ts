import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';

import { ProfessorEntity } from '../entities/professor.entity';
import { SoutenanceEntity } from '../entities/soutenance.entity';

export class SessionPfeDto {
  @ApiProperty()
  @IsOptional()
  dateDebut: Date;

  @ApiProperty()
  @IsOptional()
  dateFin: Date;

  @ApiProperty()
  lengthMaxSoutenances: number;

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => SoutenanceEntity)
  soutenances: SoutenanceEntity[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => ProfessorEntity)
  presidents: ProfessorEntity[];
}
