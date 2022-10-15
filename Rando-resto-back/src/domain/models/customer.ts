import { User } from '../shared/user.entity';
import { Transaction } from './transaction';

export class Customer extends User {
  transactions: Transaction[];
}
