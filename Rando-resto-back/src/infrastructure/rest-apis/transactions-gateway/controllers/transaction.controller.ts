import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransactionsInteractor } from 'src/application/use-cases/transations-interactor';
import { Customer } from 'src/domain/models/customer';
import { Role } from 'src/domain/models/role.enum';
import { Transaction } from 'src/domain/models/transaction';
import { User } from 'src/infrastructure/common/guards-module/decorators/get.user.decorator';
import { Roles } from 'src/infrastructure/common/guards-module/decorators/roles.decorator';
import { RolesGuard } from 'src/infrastructure/common/guards-module/guards/roles.guard';
import { CreateTransactionDto } from '../dtos/transaction.dto';

@ApiTags('Transactions')
@Controller('/transactions')
export class TransactionController {
  constructor(private transactionInteractor: TransactionsInteractor) {}

  @UseGuards(RolesGuard)
  @Roles(Role.Customer)
  @Post()
  createTransaction(
    @Body() transactionCreateDto: CreateTransactionDto,
    @User() customer: Customer,
  ): Promise<Transaction> {
    transactionCreateDto.customerId = customer.id;
    return this.transactionInteractor.createTransaction(transactionCreateDto);
  }
}
