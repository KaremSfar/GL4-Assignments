import { Exclude } from 'class-transformer';
import { Timestamp } from 'src/generics/timestamp';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class UserEntity extends Timestamp {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 50,
    unique: true,
  })
  username: string;

  @Column({
    unique: true,
  })
  email: string;

  @Exclude()
  @Column({})
  password: string;

  role: string;
}
