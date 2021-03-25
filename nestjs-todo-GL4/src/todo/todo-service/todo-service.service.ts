import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from '../dto/create-todo-dto';
import { UpdateTodoDto } from '../dto/update-todo-dto';
import { TodoEntity } from '../entities/todo.entity';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodoServiceService {
	private todos: Todo[] = [];
	
	constructor(
		@InjectRepository(TodoEntity) private readonly TodoRepository: Repository<TodoEntity>
	) {
		
	}

    getTodos(): Todo[]{
        return this.todos;
	}
	
	async getTodoById(id: string): Promise<TodoEntity> {
		const todo = await this.TodoRepository.findOne({id});
		if(todo){
			return todo;
		}
		throw new NotFoundException(`Le todo d\'id ${id} n'existe pas`) ;
	}

	async createTodo(newTodo: CreateTodoDto, user: UserEntity): Promise<TodoEntity>{
		const todo = this.TodoRepository.create(newTodo);
		todo.user = user;
		return await this.TodoRepository.save(todo);
	}

	fakeCreateTodo(newTodo: CreateTodoDto){
		const { name, description } = newTodo
		const todo = new Todo();
		todo.name = name;
		todo.description = description;

		// const todo2 = { ...newTodo }, the ... operator puts the elements in newTodo in the in-construction object

		this.todos.push(todo);
		return todo;
	}

	async updateTodo(id:string, newTodo: UpdateTodoDto): Promise<TodoEntity>{
		const todo = await this.TodoRepository.preload({
			id: id,
			...newTodo
		});
		if(todo === undefined){
			new NotFoundException(`Le todo d\'id ${id} n'existe pas`)
		}
		return await this.TodoRepository.save(todo);
	}


	deleteFakeTodo(id:string): Todo[]{
		return this.todos.splice(this.todos.findIndex(x => x.id === id), 1);
	}

	async deleteTodo(id:string){
		return await this.TodoRepository.softDelete(id);
	}

	async restoreTodo(id:string){
		return await this.TodoRepository.restore(id);
	}

	async findAllTodos(): Promise<TodoEntity[]>{
		return await this.TodoRepository.find(); //not soft deleted ofc
	}
    

	
}
