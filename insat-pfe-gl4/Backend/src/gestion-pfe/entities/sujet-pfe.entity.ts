import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

import { GenericEntity } from 'src/generics/entities/generic.entity';
import { StudentEntity } from './student.entity';
import { RapportPfeEntity } from './rapport-pfe.entity';

@Entity('sujet_pfe')
export class SujetPfeEntity extends GenericEntity {
  @Column({
    unique: true,
  })
  title: string;

  @Column()
  description: string;

  @Column()
  domain: string;

  @Column()
  year: number; //TODO: default this year

  @ManyToOne(() => StudentEntity, (student) => student.sujetsPfe, {
    nullable: true,
    eager: true, // used in guard
  })
  student: StudentEntity;

  @OneToOne(
    () => RapportPfeEntity,
    (rapportPfeEntity) => rapportPfeEntity.sujetPfe,
    { nullable: true, eager: true }, // eager true is used in guard
  )
  @JoinColumn()
  rapportPfe: RapportPfeEntity;
  // tags
}
