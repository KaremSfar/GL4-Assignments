import { Injectable } from '@nestjs/common';
import { Transaction } from 'src/domain/models/transaction';
import { CreateTransactionDataMapper } from '../data-model-mappers/transaction-mapper';
import { CreateTransactionInputData } from '../input-data/transaction-data';
import { TransactionRepository } from '../repositories/transaction.repository';

@Injectable()
export class TransactionsInteractor {
  constructor(private transactionsRepository: TransactionRepository) {}

  createTransaction(
    createTransaction: CreateTransactionInputData,
  ): Promise<Transaction> {
    const transaction = CreateTransactionDataMapper.toClass(createTransaction);
    return this.transactionsRepository.createTransaction(transaction);
  }
}
