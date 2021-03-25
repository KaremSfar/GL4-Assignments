import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfessorRepository } from 'src/gestion-pfe/repositories/professor.repository';
import { AuthService } from '../auth.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ProfessorAuthService extends AuthService {
  constructor(
    @InjectRepository(ProfessorRepository)
    professorRepository: ProfessorRepository,
    jwtService: JwtService,
  ) {
    super(professorRepository, jwtService);
  }
}
