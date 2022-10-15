import { Customer } from 'src/domain/models/customer';
import { Entity, OneToMany } from 'typeorm';
import { TransactionEntity } from './transaction.entity';
import { UserEntity } from './user.entity';

@Entity('customer')
export class CustomerEntity extends UserEntity implements Customer {
  @OneToMany(() => TransactionEntity, (transaction) => transaction.customer)
  transactions: TransactionEntity[];
}
