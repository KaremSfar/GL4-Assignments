import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Repository } from 'typeorm';
import { SalleSoutenanceEntity } from '../entities/salle-soutenance.entity';

@Injectable()
export class SalleSoutenanceService extends TypeOrmCrudService<SalleSoutenanceEntity> {
  constructor(
    @InjectRepository(SalleSoutenanceEntity)
    repository: Repository<SalleSoutenanceEntity>,
  ) {
    super(repository);
  }
  async deleteOne(crudRequest: CrudRequest) {
    const myEntity = await this.getOneOrFail(crudRequest);
    return this.repo.softRemove(myEntity);
  }
}
