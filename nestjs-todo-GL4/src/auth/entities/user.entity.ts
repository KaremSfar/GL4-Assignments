import { Timestamp } from "src/generics/timestamp";
import { TodoEntity } from "src/todo/entities/todo.entity";
import { Todo } from "src/todo/models/todo.model";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum UserRoleEnum{
    ADMIN = 'admin',
    USER = 'user'
}
@Entity('user')
export class UserEntity  extends Timestamp{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        length:50,
        unique: true
    })
    username:string;

    @Column({
        unique:true
    })
    email:string;

    @Column()
    password:string;

    @Column()
    salt:string;

    @Column({
        type:'enum',
        enum:UserRoleEnum,
        default: UserRoleEnum.USER
    })
    role:string;

    @OneToMany(
        type => TodoEntity,
        (todo) => todo.user,
        {
            nullable:true,
            cascade:true,
            eager: false
        }
    )
    todos: Todo[];
}

