import { Inject, Injectable } from '@nestjs/common';
import { Component } from 'src/domain/models/component';
import { CreateComponentDataMapper } from '../data-model-mappers/component-mappers';
import { CreateComponentInputData } from '../input-data/component-data';
import { ComponentsRepository } from '../repositories/components.repository';

@Injectable()
export class ComponentsInteractor {
  constructor(private componentRepository: ComponentsRepository) {}

  createComponent(
    createComponent: CreateComponentInputData,
  ): Promise<Component> {
    const component = CreateComponentDataMapper.toClass(createComponent);
    return this.componentRepository.createComponent(component);
  }
}
