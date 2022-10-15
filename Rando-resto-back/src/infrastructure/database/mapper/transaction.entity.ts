import { Customer } from 'src/domain/models/customer';
import { Dish } from 'src/domain/models/dish';
import { Transaction } from 'src/domain/models/transaction';
import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { CustomerEntity } from './customer.entity';
import { DishEntity } from './dish.entity';

@Entity('transaction')
export class TransactionEntity extends BaseEntity implements Transaction {
  @ManyToOne(() => CustomerEntity, (customer) => customer.transactions)
  customer: Customer;

  @ManyToOne(() => DishEntity, (dish) => dish.transactions)
  dish: Dish;
}
