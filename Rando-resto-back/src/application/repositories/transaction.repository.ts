import { Transaction } from 'src/domain/models/transaction';

export abstract class TransactionRepository {
  abstract createTransaction(transaction: Transaction): Promise<Transaction>;
}
