import { IsNotEmpty, IsOptional } from 'class-validator';

export class SalleSoutenanceDto {
  @IsNotEmpty()
  numero: number;
  @IsOptional()
  capacite: number;
}
