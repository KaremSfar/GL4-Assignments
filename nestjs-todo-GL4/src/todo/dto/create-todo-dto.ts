import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTodoDto {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10,{
        message: "La propriété $property doit avoir au plus $constraint1 caractères"
    })
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    description : string;
}