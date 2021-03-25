import {
  Controller,
  Get,
  Param,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { join } from 'path';
import { OwnerGuard } from 'src/auth/guards/owner.or.admin.guard';
import { DeepPartial } from 'typeorm';

import { RapportPfeDto } from '../dto/rapport-pfe.dto';
import { RapportPfeEntity } from '../entities/rapport-pfe.entity';
import { RapportPfeService } from '../services/rapport-pfe.service';
import { diskStorage } from 'multer';
import { editRapportFileName } from '../utils/edit.rapport.file.name';

@Crud({
  model: {
    type: RapportPfeEntity,
  },
  dto: {
    create: RapportPfeDto,
    update: RapportPfeDto,
  },
  query: {
    exclude: ['path'],
  },
})
@ApiTags('Rapport Pfe')
@Controller('/rapport/pfe')
export class RapportPfeController implements CrudController<RapportPfeEntity> {
  constructor(public service: RapportPfeService) {}

  get base(): CrudController<RapportPfeEntity> {
    return this;
  }

  @Override('createOneBase')
  @UseInterceptors(
    FileInterceptor('rapport-file', {
      storage: diskStorage({
        destination: './uploads/rapports',
        filename: editRapportFileName,
      }),
      limits: {},
    }),
  )
  createRapportPfe(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: RapportPfeDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const rapport = dto as DeepPartial<RapportPfeEntity>;
    rapport.path = file.filename;
    return this.service.createOne(req, rapport);
  }

  //Use PUT to update the actual file
  @Override('replaceOneBase')
  @UseInterceptors(
    FileInterceptor('rapport-file', {
      storage: diskStorage({
        destination: './uploads/rapports',
        filename: editRapportFileName,
      }),
      limits: {},
    }),
  )
  replaceRapportPfe(
    @Param('id') id,
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: RapportPfeDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const rapport = dto as DeepPartial<RapportPfeEntity>;
    rapport.path = file.filename;
    rapport.id = id;
    return this.service.replaceOne(req, rapport);
  }

  //GET the rapport FILE
  @UseGuards(OwnerGuard)
  @Get('/file/:id')
  async getOneRapportFile(@Param('id') id: number, @Res() response) {
    const { path } = await this.service.getRapportFile(id);
    response.download(path, 'rapport.pdf');
  }
}
