import { BaseEntity } from '../shared/base.entity';
import { Customer } from './customer';
import { Dish } from './dish';

export class Transaction extends BaseEntity {
  customer: Customer;
  dish: Dish;
}
