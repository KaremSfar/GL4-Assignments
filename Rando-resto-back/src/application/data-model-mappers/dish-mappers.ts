import { Component } from 'src/domain/models/component';
import { Dish } from 'src/domain/models/dish';
import { CreateDishInputData } from '../input-data/dishes-data';

export class CreateDishDataMapper {
  static toClass(createDish: CreateDishInputData): Dish {
    const dish = new Dish();
    dish.dishName = createDish.dishName;
    // Create components Objects
    const components: Component[] = [];
    for (const componentId of createDish.componentsIds) {
      components.push(<any>{ id: componentId });
    }
    dish.components = components;

    dish.resto = <any>{ id: createDish.restoId };

    return dish;
  }
}
