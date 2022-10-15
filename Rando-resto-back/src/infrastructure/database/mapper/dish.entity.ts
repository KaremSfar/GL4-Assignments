import { Dish } from 'src/domain/models/dish';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Component } from './component.entity';
import { RestoOwnerEntity } from './resto-owner.entity';
import { TransactionEntity } from './transaction.entity';

@Entity('dish')
export class DishEntity extends BaseEntity implements Dish {
  @ManyToOne(() => RestoOwnerEntity, (resto) => resto.dishes)
  resto: RestoOwnerEntity;

  @Column({ nullable: false })
  dishName: string;

  @OneToMany(() => Component, (component) => component.dish)
  components: Component[];

  @OneToMany(() => TransactionEntity, (transaction) => transaction.dish)
  transactions: TransactionEntity[];

  getCalories(): number {
    let calories = 0;
    for (const component of this.components) {
      calories += component.ingredient.calories * component.quantity;
    }

    return calories;
  }
}
