import {  IsNotEmpty } from "class-validator";

export class UserLogineDto{
    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    password:string;
}