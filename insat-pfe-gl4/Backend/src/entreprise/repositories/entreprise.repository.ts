import { EntityRepository, Repository } from 'typeorm';
import { EntrepriseEntity } from '../entities/entreprise.entity';

@EntityRepository(EntrepriseEntity)
export class EntrepriseRepository extends Repository<EntrepriseEntity> {}
