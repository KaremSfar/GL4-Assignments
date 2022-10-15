import { Component } from 'src/domain/models/component';

export abstract class ComponentsRepository {
  abstract createComponent(component: Component): Promise<Component>;
}
