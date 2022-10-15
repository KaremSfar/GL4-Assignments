import { InjectRepository } from '@nestjs/typeorm';
import { TransactionRepository } from 'src/application/repositories/transaction.repository';
import { Transaction } from 'src/domain/models/transaction';
import { Repository } from 'typeorm';
import { TransactionEntity } from '../mapper/transaction.entity';

export class TransactionRepo implements TransactionRepository {
  constructor(
    @InjectRepository(TransactionEntity)
    private transactionRepo: Repository<TransactionEntity>,
  ) {}
  createTransaction(transaction: Transaction): Promise<Transaction> {
    return this.transactionRepo.save(transaction);
  }
}
