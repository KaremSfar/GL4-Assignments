import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComponentsRepository } from 'src/application/repositories/components.repository';
import { Component } from 'src/domain/models/component';
import { Repository } from 'typeorm';
import { Component as ComponentEntity } from '../mapper/component.entity';

@Injectable()
export class ComponentRepo implements ComponentsRepository {
  constructor(
    @InjectRepository(ComponentEntity)
    private typeormRepo: Repository<ComponentEntity>,
  ) {}

  async createComponent(component: Component): Promise<Component> {
    return await this.typeormRepo.save(component);
  }
}
