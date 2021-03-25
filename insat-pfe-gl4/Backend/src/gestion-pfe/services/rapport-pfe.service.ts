import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { RapportPfeEntity } from '../entities/rapport-pfe.entity';
@Injectable()
export class RapportPfeService extends TypeOrmCrudService<RapportPfeEntity> {
  constructor(
    @InjectRepository(RapportPfeEntity)
    repository: Repository<RapportPfeEntity>,
  ) {
    super(repository);
  }

  //delete rapport entry in BDD
  async deleteOne(crudRequest: CrudRequest) {
    const myEntity = await this.getOneOrFail(crudRequest);
    return this.repo.softRemove(myEntity);
  }

  //Return the rapport file on disk
  async getRapportFile(id: number): Promise<RapportPfeEntity> {
    const rapport = await this.repo.findOne(id);
    if (!rapport) {
      throw new NotFoundException();
    }
    const file = `${__dirname}/../../../uploads/rapports/${rapport.path}`;
    rapport.path = file;
    return rapport;
  }
}
