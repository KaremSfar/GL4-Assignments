import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';

import { ProfessorEntity } from '../entities/professor.entity';
import { SalleSoutenanceEntity } from '../entities/salle-soutenance.entity';
import { SessionPfeEntity } from '../entities/session-pfe.entity';
import { SessionHoraireEntity } from '../entities/sessionHoraire.entity';
import { StudentEntity } from '../entities/student.entity';
import { checkSessionHoraireSalleUnique } from '../validators/sessionHoraire-salle-uniqe.validator';

export class SoutenanceDto {
  @ApiProperty()
  @ValidateNested()
  sessionPfe: SessionPfeEntity;

  @ApiProperty()
  @ValidateNested()
  president: ProfessorEntity;

  @ApiProperty()
  @ValidateNested()
  student: StudentEntity;

  @checkSessionHoraireSalleUnique('salle', {
    message:
      'il existe deja une soutenance pendant cette periode dans cette salle',
  })
  @ValidateNested()
  sessionHoraire: SessionHoraireEntity;

  @ValidateNested()
  salle: SalleSoutenanceEntity;
}
//TODO: add validation sessionHoraire (if it exists in the correct year)
//TODO: add validation sessionHoraire-salle unique
