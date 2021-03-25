import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntrepriseRepository } from '../repositories/entreprise.repository';
import { EntrepriseEntity } from '../entities/entreprise.entity';
@Injectable()
export class EntrepriseService {
  constructor(
    @InjectRepository(EntrepriseEntity)
    private repository: EntrepriseRepository,
  ) {}
  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  remove(id: number) {
    return this.repository.softDelete(id);
  }
}
