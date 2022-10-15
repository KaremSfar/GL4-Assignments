import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionRepository } from 'src/application/repositories/transaction.repository';
import { TransactionsInteractor } from 'src/application/use-cases/transations-interactor';
import { TransactionEntity } from 'src/infrastructure/database/mapper/transaction.entity';
import { TransactionRepo } from 'src/infrastructure/database/repositories/transaction.repository';
import { TransactionController } from './controllers/transaction.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionEntity])],
  providers: [
    TransactionsInteractor,
    { provide: TransactionRepository, useClass: TransactionRepo },
  ],
  controllers: [TransactionController],
})
export class TransactionModule {}
