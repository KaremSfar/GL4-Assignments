import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComponentsRepository } from 'src/application/repositories/components.repository';
import { ComponentsInteractor } from 'src/application/use-cases/components-interactor';
import { Component } from 'src/infrastructure/database/mapper/component.entity';
import { ComponentRepo } from 'src/infrastructure/database/repositories/component.repo';
import { ComponentsController } from './components/components.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Component])],
  controllers: [ComponentsController],
  providers: [
    ComponentRepo,
    { provide: ComponentsRepository, useClass: ComponentRepo },
    ComponentsInteractor,
  ],
})
export class ComponentsGatewayModule {}
