import { Body, Controller, Post } from '@nestjs/common';
import { UserLoginDto } from 'src/auth/dto/user-login.dto';
import { UserSubscribeDto } from 'src/auth/dto/user-subscribe.dto';
import { UserEntity } from 'src/generics/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../decorators/ispublic.decorator';
import { EntrepriseAuthService } from '../services/entreprise.auth/entreprise.auth.service';

@Public()
@ApiTags('authentication')
@Controller('auth/entreprise')
export class EntrepriseAuthController {
  constructor(private entrepriseAuthService: EntrepriseAuthService) {}

  @Post('register')
  register(
    @Body() userSubscribeDto: UserSubscribeDto,
  ): Promise<Partial<UserEntity>> {
    return this.entrepriseAuthService.register(userSubscribeDto);
  }

  @Post('login')
  login(@Body() userLoginDto: UserLoginDto): Promise<any> {
    return this.entrepriseAuthService.login(userLoginDto);
  }
}
