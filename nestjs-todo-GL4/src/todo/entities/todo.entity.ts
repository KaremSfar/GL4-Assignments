import { UserEntity } from "src/auth/entities/user.entity";
import { Timestamp } from "src/generics/timestamp";
import { Column,   Entity, ManyToOne, PrimaryGeneratedColumn,  } from "typeorm";
import { TodoStatus } from "../enums/todo-status.enum";




@Entity('todo')
export class TodoEntity extends Timestamp {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length:30
  })
  name: string;
  @Column({
    length:255,
  })
  description: string;

  @Column({
    type:'enum',
    enum:TodoStatus,
    default: TodoStatus.waiting
  })
  status: TodoStatus;

  @ManyToOne(
    type => UserEntity,
    (user) => user.todos,
    {
      cascade: ['insert','update'],
      nullable: true,
      eager: true
    }
  )
  user: UserEntity;

}

