import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DishesInteractor } from 'src/application/use-cases/dishes-interactor';
import { Role } from 'src/domain/models/role.enum';
import { User } from 'src/infrastructure/common/guards-module/decorators/get.user.decorator';
import { Roles } from 'src/infrastructure/common/guards-module/decorators/roles.decorator';
import { RolesGuard } from 'src/infrastructure/common/guards-module/guards/roles.guard';
import { RestoOwnerEntity } from 'src/infrastructure/database/mapper/resto-owner.entity';
import { CreateDishDto } from '../dto/dishes.dto';

@ApiTags('Resto Dishes')
@UseGuards(RolesGuard)
@Roles(Role.RestoOwner)
@Controller('dishes/resto')
export class DishesRestoController {
  constructor(private dishesInteractor: DishesInteractor) {}

  @Get()
  getDishes() {
    return this.dishesInteractor.getDishes();
  }

  @Post()
  createDish(
    @Body() createDishDto: CreateDishDto,
    @User() restoOwner: RestoOwnerEntity,
  ) {
    createDishDto.restoId = restoOwner.id;
    return this.dishesInteractor.createDish(createDishDto);
  }
}
