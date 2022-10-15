import { Ingredient } from 'src/domain/models/ingredient';
import { BaseEntity } from './base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Component } from './component.entity';

@Entity('ingredient')
export class IngredientEntity extends BaseEntity implements Ingredient {
  @Column({
    unique: true,
  })
  ingredientName: string;

  @Column('decimal', { precision: 5, scale: 2 })
  calories: number;

  @OneToMany(() => Component, (component) => component.ingredient)
  components: Component[];
}
