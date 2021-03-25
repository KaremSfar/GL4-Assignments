import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserSubscribeDto } from './dto/user-subscribe.dto';
import { UserEntity } from './entities/user.entity';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){

    }
    
    @Post('register')
    register(
        @Body() userSubscribeDto:UserSubscribeDto
    ):Promise<Partial<UserEntity>>{
        return this.authService.register(userSubscribeDto);
    }

    @Post('login')
    login(
        @Body() userSubscribeDto:UserSubscribeDto
    ):Promise<any>{
        return this.authService.login(userSubscribeDto);
    }

    @UseGuards(AuthGuard())
    @Get('test')
    test(@GetUser() user, @Req() req) : Partial<UserEntity> {
        return req.user;
    }
}
