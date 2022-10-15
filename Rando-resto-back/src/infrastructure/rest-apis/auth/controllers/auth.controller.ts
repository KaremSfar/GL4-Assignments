import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserLoginDto, UserSubscribeDto } from '../dtos/user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/infrastructure/database/mapper/user.entity';
import { AuthInteractor } from 'src/application/use-cases/auth-interactor';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authInteractor: AuthInteractor) {}

  // registering to the app route
  @Post('register')
  register(
    @Body() userSubscribeDto: UserSubscribeDto,
  ): Promise<Partial<UserEntity>> {
    return this.authInteractor.register(userSubscribeDto);
  }

  // loggin in route
  @Post('login')
  login(@Body() userLoginDto: UserLoginDto): Promise<any> {
    return this.authInteractor.login(userLoginDto);
  }

  // test route for testing UseGuards; TODO Delete
  @Get('test')
  @UseGuards(AuthGuard('jwt'))
  test() {
    return 'alou';
  }
}
