import { IsEmail, IsNotEmpty } from "class-validator";

export class UserSubscribeDto{
    @IsNotEmpty()
    username:string;

    @IsEmail()
    @IsNotEmpty()
    email;

    @IsNotEmpty()
    password:string;
}