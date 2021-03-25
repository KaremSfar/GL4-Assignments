import { ApiProperty } from '@nestjs/swagger';
import { Entity } from 'typeorm';

@Entity('internship_offer')
export class InternshipOfferDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
