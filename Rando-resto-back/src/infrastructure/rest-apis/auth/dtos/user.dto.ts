import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import {
  UserCreateInputData,
  UserLoginInputData,
} from 'src/application/input-data/user.data';
import { Role } from 'src/domain/models/role.enum';

// Dto for registering
export class UserSubscribeDto implements UserCreateInputData {
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(50)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
    message:
      'Password must contain at least 1 Special character, 1 Uppercase, 1 lowercase and 1 number',
  }) //good password validation;
  password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  @ApiProperty()
  role: Role;
}

// Logging in DTO
export class UserLoginDto implements UserLoginInputData {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}
