import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateTransactionInputData } from 'src/application/input-data/transaction-data';

export class CreateTransactionDto extends CreateTransactionInputData {
  //Same As in dishes ! Get rid of this and create proper Mappers but trop la flemme for now
  customerId: string;

  @IsNotEmpty()
  @ApiProperty()
  dishId: string;
}
