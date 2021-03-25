import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Repository } from 'typeorm';
import { SessionPfeEntity } from '../entities/session-pfe.entity';

@Injectable()
export class SessionPfeService extends TypeOrmCrudService<SessionPfeEntity> {
  constructor(
    @InjectRepository(SessionPfeEntity)
    repository: Repository<SessionPfeEntity>,
  ) {
    super(repository);
  }
  async deleteOne(crudRequest: CrudRequest) {
    const myEntity = await this.getOneOrFail(crudRequest);
    return this.repo.softRemove(myEntity);
  }
}
