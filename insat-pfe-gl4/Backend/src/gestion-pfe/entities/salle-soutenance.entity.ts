import { Column, Entity, OneToMany } from 'typeorm';

import { GenericEntity } from 'src/generics/entities/generic.entity';
import { SoutenanceEntity } from './soutenance.entity';

@Entity('salle_soutenance')
export class SalleSoutenanceEntity extends GenericEntity {
  @Column({ unique: true })
  numero: number;

  @Column()
  capacite: number;

  @OneToMany(() => SoutenanceEntity, (soutenance) => soutenance.salle)
  soutenances: SoutenanceEntity[];
}
