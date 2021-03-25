import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Equal, Raw, Repository } from 'typeorm';
import { SalleSoutenanceEntity } from '../entities/salle-soutenance.entity';
import { SessionHoraireEntity } from '../entities/sessionHoraire.entity';
import { SoutenanceEntity } from '../entities/soutenance.entity';

@Injectable()
export class SoutenanceService extends TypeOrmCrudService<SoutenanceEntity> {
  constructor(
    @InjectRepository(SoutenanceEntity)
    repository: Repository<SoutenanceEntity>,
  ) {
    super(repository);
  }
  async deleteOne(crudRequest: CrudRequest) {
    const myEntity = await this.getOneOrFail(crudRequest);
    return this.repo.softRemove(myEntity);
  }
  async checkContrainstHoraireSalle(
    salle: SalleSoutenanceEntity,
    session: SessionHoraireEntity,
  ): Promise<boolean> {
    return await this.repo
      .find({
        where: {
          //TODO: fix this
          /*sessionHoraire: {
            dateDebut: Raw((alias) => `${alias} <= ${session.dateFin}`),
            dateFin: Raw((alias) => `${alias} >= ${session.dateDebut}`),
          },*/
          salle: salle.id,
        },
        relations: ['salle', 'sessionHoraire'],
      })
      .then((soutenances) => {
        for (const soutenance of soutenances) {
          if (
            new Date(soutenance.sessionHoraire.dateDebut).getTime() <=
              new Date(session.dateFin).getTime() &&
            new Date(soutenance.sessionHoraire.dateFin).getTime() >=
              new Date(session.dateDebut).getTime()
          )
            return false;
        }
        return true;
      });
  }
}
