import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Repository } from 'typeorm';
import { SujetPfeDto } from '../dto/sujet-pfe.dto';
import { StudentEntity } from '../entities/student.entity';
import { SujetPfeEntity } from '../entities/sujet-pfe.entity';

@Injectable()
export class SujetPfeService extends TypeOrmCrudService<SujetPfeEntity> {
  constructor(
    @InjectRepository(SujetPfeEntity) repository: Repository<SujetPfeEntity>,
  ) {
    super(repository);
  }
  async deleteOne(crudRequest: CrudRequest) {
    const myEntity = await this.getOneOrFail(crudRequest);
    return this.repo.softRemove(myEntity);
  }

  async createSujet(req, dto, student: StudentEntity) {
    dto.student = student;
    return super.createOne(req, dto);
  }
}
