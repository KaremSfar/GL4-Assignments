import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

import { GenericEntity } from 'src/generics/entities/generic.entity';
import { ProfessorEntity } from './professor.entity';
import { SalleSoutenanceEntity } from './salle-soutenance.entity';
import { SessionPfeEntity } from './session-pfe.entity';
import { StudentEntity } from './student.entity';
import { SessionHoraireEntity } from './sessionHoraire.entity';

@Entity('soutenance_pfe')
export class SoutenanceEntity extends GenericEntity {
  @ManyToOne((type) => SessionPfeEntity, (sessionPfe) => sessionPfe.soutenances)
  sessionPfe: SessionPfeEntity;

  @ManyToOne((type) => ProfessorEntity)
  president: ProfessorEntity;

  @OneToOne((type) => StudentEntity, (student) => student.soutenance, {})
  @JoinColumn()
  student: StudentEntity;

  @ManyToOne(() => SalleSoutenanceEntity, (salle) => salle.soutenances)
  salle: SalleSoutenanceEntity;

  @ManyToOne(
    () => SessionHoraireEntity,
    (sessionHoraire) => sessionHoraire.soutenances,
    {
      eager: true,
      cascade: true,
    },
  )
  sessionHoraire: SessionHoraireEntity;

  //TODO: add class Section
}
