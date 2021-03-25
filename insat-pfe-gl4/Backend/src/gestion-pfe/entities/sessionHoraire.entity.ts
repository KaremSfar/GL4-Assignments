import { Column, Entity, OneToMany } from 'typeorm';

import { GenericEntity } from 'src/generics/entities/generic.entity';
import { SoutenanceEntity } from './soutenance.entity';

@Entity('session_horaire')
export class SessionHoraireEntity extends GenericEntity {
  @Column()
  dateDebut: Date;

  @Column()
  dateFin: Date;

  @OneToMany(() => SoutenanceEntity, (soutenance) => soutenance.sessionHoraire)
  soutenances: SoutenanceEntity[];
}
