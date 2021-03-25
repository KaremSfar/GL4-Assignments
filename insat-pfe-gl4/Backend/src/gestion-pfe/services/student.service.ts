import { StudentEntity } from '../entities/student.entity';
import { StudentRepository } from '../repositories/student.repository';
import { InjectRepository } from '@nestjs/typeorm';
import * as csv from 'csv-parser';
import * as fs from 'fs';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DeepPartial } from 'typeorm';

import * as bcrypt from 'bcrypt';

export class StudentService extends TypeOrmCrudService<StudentEntity> {
  constructor(@InjectRepository(StudentEntity) repository: StudentRepository) {
    super(repository);
  }

  //TODO: Clean Code here; do a csv parser class

  async createManyFromFile(req, file) {
    const promise = new Promise(function (resolve, reject) {
      //students read from csv file
      const students = [] as DeepPartial<StudentEntity>[];

      //file stream
      const studentsFile = fs.createReadStream(file.path);
      //parse students from csv file
      studentsFile.pipe(csv()).on('data', function (data) {
        students.push(data);
      });
      //if end of file on csv file
      studentsFile.on('end', async () => {
        //crypt students passwords;
        //TODO: get rid of this for loop
        for (const student of students) {
          student.password = await bcrypt.hash(
            student.password,
            await bcrypt.genSalt(),
          );
        }
        resolve(students);
      });
      //if an error is caught, reject the promise
      studentsFile.on('error', reject);
    });

    //await the csv parsed students
    const students = (await promise) as DeepPartial<StudentEntity>[];

    // create the entities
    const created = this.repo.create(students);
    //save the entities
    return this.repo.save(created);
  }
}
