import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StudentRegisterDto } from 'src/auth/dto/student-register.dto';
import { UserLoginDto } from 'src/auth/dto/user-login.dto';
import { UserEntity } from 'src/generics/user.entity';
import { StudentAuthService } from 'src/auth/services/student.auth/student.auth.service';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from '../guards/roles.guard';
import { Public } from '../decorators/ispublic.decorator';

@Public()
@ApiTags('authentication')
@Controller('auth/student')
export class StudentAuthController {
  constructor(private studentAuthService: StudentAuthService) {}

  @Post('register')
  register(
    @Body() studentRegisterDto: StudentRegisterDto,
  ): Promise<Partial<UserEntity>> {
    return this.studentAuthService.register(studentRegisterDto);
  }

  @Post('login')
  login(@Body() userLoginDto: UserLoginDto): Promise<any> {
    return this.studentAuthService.login(userLoginDto);
  }
}
