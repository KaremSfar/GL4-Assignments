import { GenericEntity } from 'src/generics/entities/generic.entity';
import { Column, Entity } from 'typeorm';

@Entity('year')
export class Year extends GenericEntity {
  @Column({
    unique: true,
  })
  year: number;

  @Column()
  maxTutoredStudents: number;
}
