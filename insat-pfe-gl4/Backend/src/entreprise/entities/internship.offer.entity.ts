import { Exclude } from 'class-transformer';
import { GenericEntity } from 'src/generics/entities/generic.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { EntrepriseEntity } from './entreprise.entity';

@Entity('internship_offer')
export class InternshipOfferEntity extends GenericEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(
    () => EntrepriseEntity,
    (entrepriseEntity) => entrepriseEntity.internshipOffers,
    {
      eager: true,
    },
  )
  entreprise: EntrepriseEntity;

  @Column({
    default: false,
  })
  @Exclude({
    toClassOnly: true, // disable patch and put requests to manually change them
  })
  validated: boolean;
}
