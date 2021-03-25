import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { UserEntity } from '../../generics/user.entity';
import { SoutenanceEntity } from './soutenance.entity';
import { SujetPfeEntity } from './sujet-pfe.entity';

@Entity('student')
export class StudentEntity extends UserEntity {
  @Column()
  carteEtudiant: string;

  @OneToMany(() => SujetPfeEntity, (sujetPfe) => sujetPfe.student, {
    nullable: true,
  })
  sujetsPfe: SujetPfeEntity[];

  @OneToOne(() => SoutenanceEntity, (soutenance) => soutenance.student, {
    nullable: true,
  })
  soutenance: SoutenanceEntity;
}
