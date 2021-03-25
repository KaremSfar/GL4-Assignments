import { GenericEntity } from 'src/generics/entities/generic.entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { SujetPfeEntity } from './sujet-pfe.entity';

@Entity('rapport_pfe')
export class RapportPfeEntity extends GenericEntity {
  @OneToOne(() => SujetPfeEntity, (sujetPfeEntity) => sujetPfeEntity.rapportPfe)
  sujetPfe: SujetPfeEntity;

  @Column({
    nullable: false,
  })
  path: string;

  @Column({
    nullable: false,
  })
  isPublic: boolean;
}
