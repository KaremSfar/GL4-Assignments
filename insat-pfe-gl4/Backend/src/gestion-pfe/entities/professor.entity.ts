import { Entity } from 'typeorm';
import { UserEntity } from '../../generics/user.entity';

@Entity('professor')
export class ProfessorEntity extends UserEntity {}
