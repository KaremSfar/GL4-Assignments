import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ComponentsInteractor } from 'src/application/use-cases/components-interactor';
import { CreateComponentDto } from '../dto/component-dto';

@ApiTags('Components')
@Controller('components')
export class ComponentsController {
  constructor(private componentInteractor: ComponentsInteractor) {}

  @Post()
  createComponent(@Body() createComponentDto: CreateComponentDto) {
    return this.componentInteractor.createComponent(createComponentDto);
  }
}
