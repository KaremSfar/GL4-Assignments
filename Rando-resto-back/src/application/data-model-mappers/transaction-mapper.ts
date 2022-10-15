import { Transaction } from 'src/domain/models/transaction';
import { CreateTransactionInputData } from '../input-data/transaction-data';

export class CreateTransactionDataMapper {
  static toClass(createTransaction: CreateTransactionInputData): Transaction {
    const transaction = new Transaction();
    transaction.dish = <any>{ id: createTransaction.dishId };
    transaction.customer = <any>{ id: createTransaction.customerId };

    return transaction;
  }
}
