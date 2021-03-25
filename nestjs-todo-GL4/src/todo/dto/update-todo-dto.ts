import { IsIn, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { TodoStatus } from "../enums/todo-status.enum";

export class UpdateTodoDto  {
    @IsIn([
        TodoStatus.waiting,
        TodoStatus.done,
        TodoStatus.actif
    ],{
        message: "Status ivalide"
    })
    @IsOptional()
    status: TodoStatus;

    @IsOptional()
    @MinLength(3)
    @MaxLength(10,{
        message: "La propriété $property doit avoir au plus $constraint1 caractères"
    })
    name: string;
    
    @IsOptional()
    @IsString()
    @MinLength(10)
    description : string;
}