import { Body, Controller, Post } from '@nestjs/common';
import { UserLoginDto } from 'src/auth/dto/user-login.dto';
import { UserSubscribeDto } from 'src/auth/dto/user-subscribe.dto';
import { UserEntity } from 'src/generics/user.entity';
import { AdminAuthService } from 'src/auth/services/admin.auth/admin.auth.service';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../decorators/ispublic.decorator';

@Public()
@ApiTags('authentication')
@Controller('auth/admin')
export class AdminAuthController {
  constructor(private adminAuthService: AdminAuthService) {}

  @Post('register')
  register(
    @Body() userSubscribeDto: UserSubscribeDto,
  ): Promise<Partial<UserEntity>> {
    return this.adminAuthService.register(userSubscribeDto);
  }

  @Post('login')
  login(@Body() userLoginDto: UserLoginDto): Promise<any> {
    return this.adminAuthService.login(userLoginDto);
  }
}
