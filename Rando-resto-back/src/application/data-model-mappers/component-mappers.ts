import { Component } from 'src/domain/models/component';
import { CreateComponentInputData } from '../input-data/component-data';

export class CreateComponentDataMapper {
  static toClass(createComponent: CreateComponentInputData): Component {
    const component = new Component();
    component.ingredient = <any>{ id: createComponent.ingredientId };
    component.quantity = createComponent.quantity;
    return component;
  }
}
