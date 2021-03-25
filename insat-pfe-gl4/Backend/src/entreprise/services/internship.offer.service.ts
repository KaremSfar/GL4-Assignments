import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AdminEntity } from 'src/gestion-pfe/entities/admin.entity';
import { Repository } from 'typeorm';
import { EntrepriseEntity } from '../entities/entreprise.entity';
import { InternshipOfferEntity } from '../entities/internship.offer.entity';
@Injectable()
export class InternshipOfferService extends TypeOrmCrudService<InternshipOfferEntity> {
  constructor(
    @InjectRepository(InternshipOfferEntity)
    repository: Repository<InternshipOfferEntity>,
  ) {
    super(repository);
  }

  async deleteOne(crudRequest: CrudRequest) {
    const myEntity = await this.getOneOrFail(crudRequest);
    return this.repo.softRemove(myEntity);
  }

  //getting offers depend on user
  async getOffres(req, user) {
    if (user && user instanceof AdminEntity) return await this.repo.find(); // if admin return all offers
    return await this.repo.find({ where: { validated: true } }); // return only validated offers
  }

  async createOffer(req, dto, entreprise: EntrepriseEntity) {
    dto.entreprise = entreprise;
    return super.createOne(req, dto);
  }

  async validate(id) {
    const offer = await this.repo.findOne(id);
    if (!offer) throw new NotFoundException();
    offer.validated = true;
    return await this.repo.save(offer);
  }
}
