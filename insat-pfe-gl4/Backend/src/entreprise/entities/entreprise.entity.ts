import { UserEntity } from 'src/generics/user.entity';
import { Entity, OneToMany } from 'typeorm';
import { InternshipOfferEntity } from './internship.offer.entity';

@Entity('entreprise')
export class EntrepriseEntity extends UserEntity {
  @OneToMany(
    () => InternshipOfferEntity,
    (intershipOffer) => intershipOffer.entreprise,
  )
  internshipOffers: InternshipOfferEntity[];
}
