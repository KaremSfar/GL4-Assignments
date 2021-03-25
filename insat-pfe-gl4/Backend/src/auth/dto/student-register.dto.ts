import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { UserSubscribeDto } from './user-subscribe.dto';

// Dto For Registering thru Students API
export class StudentRegisterDto extends UserSubscribeDto {
  @ApiProperty()
  @IsNotEmpty()
  carteEtudiant: string;
}
//TODO: add validation unique
