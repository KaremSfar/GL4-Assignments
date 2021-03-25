import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoServiceService } from './todo-service/todo-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [TodoController],
  providers: [TodoServiceService],
  imports : [
    AuthModule,
    TypeOrmModule.forFeature([
      TodoEntity
    ])
  ],
  exports : []
})
export class TodoModule {}
