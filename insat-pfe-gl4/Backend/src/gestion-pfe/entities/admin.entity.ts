import { Entity } from 'typeorm';
import { UserEntity } from '../../generics/user.entity';

@Entity('admin')
export class AdminEntity extends UserEntity {}
