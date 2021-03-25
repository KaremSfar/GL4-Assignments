import { Controller, Get, Param, Delete } from '@nestjs/common';
import { EntrepriseService } from './../services/entreprise.service';

import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { ApiTags } from '@nestjs/swagger';

@Roles(Role.Admin)
@ApiTags('Entreprise')
@Controller('entreprise')
export class EntrepriseController {
  constructor(private readonly entrepriseService: EntrepriseService) {}

  @Get()
  findAll() {
    return this.entrepriseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entrepriseService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entrepriseService.remove(+id);
  }
}
