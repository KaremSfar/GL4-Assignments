import { Body, Controller, Post } from '@nestjs/common';
import { UserLoginDto } from 'src/auth/dto/user-login.dto';
import { UserSubscribeDto } from 'src/auth/dto/user-subscribe.dto';
import { UserEntity } from 'src/generics/user.entity';
import { ProfessorAuthService } from 'src/auth/services/professor.auth/professor.auth.service';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../decorators/ispublic.decorator';

@Public()
@ApiTags('authentication')
@Controller('auth/Professor')
export class ProfessorAuthController {
  constructor(private professorAuthService: ProfessorAuthService) {}

  @Post('register')
  register(
    @Body() userSubscribeDto: UserSubscribeDto,
  ): Promise<Partial<UserEntity>> {
    return this.professorAuthService.register(userSubscribeDto);
  }

  @Post('login')
  login(@Body() userLoginDto: UserLoginDto): Promise<any> {
    return this.professorAuthService.login(userLoginDto);
  }
}
