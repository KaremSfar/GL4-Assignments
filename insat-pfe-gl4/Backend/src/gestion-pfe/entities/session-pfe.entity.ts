import { GenericEntity } from 'src/generics/entities/generic.entity';
import { Column, Entity, OneToMany, ManyToMany, JoinTable } from 'typeorm';

import { ProfessorEntity } from './professor.entity';
import { SoutenanceEntity } from './soutenance.entity';

@Entity('session_pfe')
export class SessionPfeEntity extends GenericEntity {
  @Column()
  dateDebut: Date;

  @Column()
  dateFin: Date;

  @Column()
  lengthMaxSoutenances: number;

  @OneToMany(
    (type) => SoutenanceEntity,
    (soutenance) => soutenance.sessionPfe,
    { cascade: true },
  )
  soutenances: SoutenanceEntity[];

  @ManyToMany((type) => ProfessorEntity)
  @JoinTable()
  presidents: ProfessorEntity[];
}
