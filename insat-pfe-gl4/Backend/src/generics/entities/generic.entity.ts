import { PrimaryGeneratedColumn } from 'typeorm';
import { Timestamp } from '../timestamp';

export class GenericEntity extends Timestamp {
  @PrimaryGeneratedColumn()
  id: number;
}
