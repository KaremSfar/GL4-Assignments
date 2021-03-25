import { Controller, Param, Patch, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { User } from 'src/auth/decorators/get.user.decorator';
import { Public } from 'src/auth/decorators/ispublic.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { InternshipOfferDto } from '../dto/create.internship.offer.dto';
import { EntrepriseEntity } from '../entities/entreprise.entity';
import { InternshipOfferEntity } from '../entities/internship.offer.entity';
import { InternshipOfferService } from '../services/internship.offer.service';

@Crud({
  model: {
    type: InternshipOfferEntity,
  },
  dto: {
    create: InternshipOfferDto,
  },
})
@ApiTags('Internships')
@Controller('/internship')
export class InternshipOfferController
  implements CrudController<InternshipOfferEntity> {
  constructor(public service: InternshipOfferService) {}


  @Roles(Role.Entreprise)
  @Override('createOneBase')
  async createInternshipOffer(
    @ParsedRequest() parsedReq: CrudRequest,
    @ParsedBody() dto: InternshipOfferDto,
    @Req() request, // to retrieve user
  ) {
    const entreprie = request.user as EntrepriseEntity;
    return this.service.createOffer(parsedReq, dto, entreprie); // create an offer with the entreprise attached
  }

  //Route that validates internships; letting them be be shown in home
  @Roles(Role.Admin)
  @Patch('/validate/:id')
  async validate(@Param('id') id) {
    return this.service.validate(id);
  }

  @Public()
  @Override('getManyBase')
  async getOffres(@ParsedRequest() parsedReq: CrudRequest, @User() user) {
    return this.service.getOffres(parsedReq, user);
  }
}
