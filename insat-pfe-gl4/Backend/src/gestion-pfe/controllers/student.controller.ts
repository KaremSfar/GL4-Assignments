import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Crud, CrudController, Override, ParsedRequest } from '@nestjsx/crud';
import { StudentEntity } from '../entities/student.entity';
import { StudentService } from '../services/student.service';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../auth/enums/role.enum';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editStudentsFileName } from '../utils/edit.students.file.name';

@Crud({
  model: {
    type: StudentEntity,
  },
})
@Roles(Role.Admin)
@Controller('/students')
export class StudentController {
  constructor(public service: StudentService) {}

  @Post('/file')
  @UseInterceptors(
    FileInterceptor('students-batch', {
      storage: diskStorage({
        destination: './uploads/students',
        filename: editStudentsFileName,
      }),
      limits: {},
    }),
  )
  async createBatchFile(
    @UploadedFile() file: Express.Multer.File,
    @ParsedRequest() req,
  ): Promise<StudentEntity[]> {
    return await this.service.createManyFromFile(req, file);
  }
}
