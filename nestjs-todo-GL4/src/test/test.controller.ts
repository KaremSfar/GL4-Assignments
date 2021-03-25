import { Controller, Delete, Get, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "src/auth/get-user.decorator";



@Controller('test')
export class TestController{
    @UseGuards(AuthGuard())
    @Get()
    get(@GetUser() user): string{ 
        return user;
    }
    
    @Post()
    post(): string{
        return 'post';
    }
    @Put()
    put(): string{
        return 'put';
    }
    @Delete()
    delete(): string{
        return 'delete';
    }
}