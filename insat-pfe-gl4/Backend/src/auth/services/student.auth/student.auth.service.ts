import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentRepository } from '../../../gestion-pfe/repositories/student.repository';
import { AuthService } from '../auth.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class StudentAuthService extends AuthService {
  constructor(
    @InjectRepository(StudentRepository)
    studentRepository: StudentRepository,
    jwtService: JwtService,
  ) {
    super(studentRepository, jwtService);
  }
}
