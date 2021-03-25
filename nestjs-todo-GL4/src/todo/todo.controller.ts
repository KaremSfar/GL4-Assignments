import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { UserEntity } from 'src/auth/entities/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';
import { PreciseHttpFilter } from 'src/middlwares-test/filters/precise-http-filter';
import { FirstPipe } from 'src/middlwares-test/pipes/first.pipe';
import { CreateTodoDto } from './dto/create-todo-dto';
import { UpdateTodoDto } from './dto/update-todo-dto';
import { TodoEntity } from './entities/todo.entity';
import { TodoServiceService } from './todo-service/todo-service.service';



//TODO: Add loggin in user to newly saved todos in controller and SERVICE !!

@UseGuards(AuthGuard())
@Controller('todo')
export class TodoController {
	constructor(private todoService: TodoServiceService, private readonly configService: ConfigService) {
		this.todoService = todoService
	}

	@Get()
	@UseFilters(PreciseHttpFilter)
	getTodos(): Promise<TodoEntity[]> {
		return this.todoService.findAllTodos();
	}

	@Get(":id")
	getTodoById(@Param('id') id: string): Promise<TodoEntity> {
		return this.todoService.getTodoById(id);
	}

	@Post()
	async addTodo(
		@Body(FirstPipe) newTodo: CreateTodoDto, //Partial = une partie de todo, pas un objet kemel
		@GetUser() user: UserEntity, 
	): Promise<TodoEntity> {
		return await this.todoService.createTodo(newTodo,user);
	}

	@Put('/:id')
	async changeTodo(
		@Param('id') id: string,
		@Body() newTodo: UpdateTodoDto
	): Promise<TodoEntity> {
		return await this.todoService.updateTodo(id,newTodo);
	}

	@Put('restore/:id')
	restoreTodoById(@Param('id') id: string){
		return this.todoService.restoreTodo(id);
	}

	@Delete('/:id')
	deleteTodo(@Param('id') id: string) {
		return this.todoService.deleteTodo(id);
	}

}
