import { Module } from '@nestjs/common';
import { EntrepriseService } from './services/entreprise.service';
import { EntrepriseController } from './controllers/entreprise.controller';
import { InternshipOfferController } from './controllers/internship.offer.controller';
import { InternshipOfferService } from './services/internship.offer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InternshipOfferEntity } from './entities/internship.offer.entity';
import { EntrepriseEntity } from './entities/entreprise.entity';
import { EntrepriseRepository } from './repositories/entreprise.repository';

//Module for 'entreprise' users
@Module({
  imports: [
    TypeOrmModule.forFeature([
      InternshipOfferEntity,
      EntrepriseEntity,
      EntrepriseRepository,
    ]),
  ],
  controllers: [EntrepriseController, InternshipOfferController],
  providers: [EntrepriseService, InternshipOfferService, EntrepriseRepository],
})
export class EntrepriseModule {}
