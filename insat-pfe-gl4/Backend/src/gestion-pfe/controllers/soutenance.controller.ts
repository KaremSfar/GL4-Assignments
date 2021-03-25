import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Public } from 'src/auth/decorators/ispublic.decorator';

import { SoutenanceDto } from '../dto/soutenance.dto';
import { SoutenanceEntity } from '../entities/soutenance.entity';
import { SoutenanceService } from '../services/soutenance.service';

@Crud({
  model: {
    type: SoutenanceEntity,
  },
  dto: {
    create: SoutenanceDto,
    update: SoutenanceDto,
  },
  query: {
    join: {
      student: {
        eager: true,
      },
    },
  },
})
@Public()
@ApiTags('Soutenance Pfe')
@Controller('/pfe/soutenance')
export class SoutenanceController implements CrudController<SoutenanceEntity> {
  constructor(public service: SoutenanceService) {}
}
