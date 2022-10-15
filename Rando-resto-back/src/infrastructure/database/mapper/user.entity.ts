import { Role } from 'src/domain/models/role.enum';
import { User } from 'src/domain/shared/user.entity';
import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export abstract class UserEntity extends BaseEntity implements User {
  username: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({})
  password: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  telephone: string;

  role: Role;
}
