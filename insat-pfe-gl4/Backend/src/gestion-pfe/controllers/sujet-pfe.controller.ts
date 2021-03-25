import { Controller, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';

import { SujetPfeDto } from '../dto/sujet-pfe.dto';
import { SujetPfeDtoUpdate } from '../dto/sujet-pfe.update.dto';
import { StudentEntity } from '../entities/student.entity';
import { SujetPfeEntity } from '../entities/sujet-pfe.entity';
import { SujetPfeService } from '../services/sujet-pfe.service';

@Crud({
  model: {
    type: SujetPfeEntity,
  },
  dto: {
    create: SujetPfeDto,
    update: SujetPfeDtoUpdate,
    replace: SujetPfeDto,
  },
  query: {
    join: {
      rapportPfe: {
        eager: true,
        exclude: ['path'],
      },
      student: {
        eager: true,
        exclude: ['id', 'carteEtudiant'],
      },
    },
  },
  routes: {
    exclude: ['createManyBase'],
  },
})
@ApiTags('Sujet Pfe')
@Controller('/pfe/sujet')
export class SujetPfeController implements CrudController<SujetPfeEntity> {
  constructor(public service: SujetPfeService) {}

  @Roles(Role.Student)
  @Override('createOneBase')
  createOneSujet(
    @ParsedRequest() parsedReq: CrudRequest,
    @ParsedBody() dto: SujetPfeDto,
    @Req() request, // to retrieve user
  ) {
    const student = request.user as StudentEntity;
    return this.service.createSujet(parsedReq, dto, student);
  }
}
