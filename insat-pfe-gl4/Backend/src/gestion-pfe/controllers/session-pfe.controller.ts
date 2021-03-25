import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Public } from 'src/auth/decorators/ispublic.decorator';
import { SessionPfeDto } from '../dto/session-pfe.dto';
import { SessionPfeEntity } from '../entities/session-pfe.entity';
import { SessionPfeService } from '../services/session-pfe.service';

@Crud({
  model: {
    type: SessionPfeEntity,
  },
  dto: {
    create: SessionPfeDto,
    update: SessionPfeDto,
  },
  query: {
    join: {
      soutenances: {
        eager: true,
      },
      'soutenances.student': {
        eager: true,
      },
    },
  },
})
@Public() // TODO: DELETE THIS
@ApiTags('Session Pfe')
@Controller('/pfe/session')
export class SessionPfeController implements CrudController<SessionPfeEntity> {
  constructor(public service: SessionPfeService) {}
}
