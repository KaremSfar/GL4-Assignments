import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Public } from 'src/auth/decorators/ispublic.decorator';
import { SalleSoutenanceDto } from '../dto/salle-soutenance.dto';
import { SalleSoutenanceEntity } from '../entities/salle-soutenance.entity';
import { SalleSoutenanceService } from '../services/salle-soutenance.service';

@Crud({
  model: {
    type: SalleSoutenanceEntity,
  },
  dto: {
    create: SalleSoutenanceDto,
    update: SalleSoutenanceDto,
  },
})
@Public() // TODO: DELETE THIS
@ApiTags('Salle Soutenance')
@Controller('/pfe/salle')
export class SalleSoutenanceController
  implements CrudController<SalleSoutenanceEntity> {
  constructor(public service: SalleSoutenanceService) {}
}
