import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

// A Generic UserRegisterDTO; if specific fields are added to classes extending UserEntity, Extend this class
// to add Validation to new DTO
export class UserSubscribeDto {
  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
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
}
