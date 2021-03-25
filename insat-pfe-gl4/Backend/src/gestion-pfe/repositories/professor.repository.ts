import { EntityRepository, Repository } from 'typeorm';
import { ProfessorEntity } from '../entities/professor.entity';

@EntityRepository(ProfessorEntity)
export class ProfessorRepository extends Repository<ProfessorEntity> {}
