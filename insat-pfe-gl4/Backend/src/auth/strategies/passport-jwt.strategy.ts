import * as dotenv from 'dotenv';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { StudentRepository } from '../../gestion-pfe/repositories/student.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfessorRepository } from '../../gestion-pfe/repositories/professor.repository';
import { AdminRepository } from '../../gestion-pfe/repositories/admin.repository';
import { UnauthorizedException } from '@nestjs/common';
import { EntrepriseRepository } from 'src/entreprise/repositories/entreprise.repository';

dotenv.config();

// PassportStrategy Used by AuthGuards (Injected by nest) to verify a user
// JwtStrategy uses JWTokens, decrypts them with secret and returns the payload
export class PassportJwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(StudentRepository)
    private studentRepository: StudentRepository,
    @InjectRepository(ProfessorRepository)
    private professorRepository: ProfessorRepository,
    @InjectRepository(AdminRepository)
    private adminRepository: AdminRepository,
    @InjectRepository(EntrepriseRepository)
    private entrepriseRepository: EntrepriseRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // sets Token Type
      secretOrKey: process.env.SECRET, // Sets Secret
    });
  }

  async validate(payload) {
    //we can define the payload interface
    const student = await this.getStudent(payload);
    if (student) return student;
    const professor = await this.getProfessor(payload);
    if (professor) return professor;
    const admin = await this.getAdmin(payload);
    if (admin) return admin;
    const entreprise = await this.getEntreprise(payload);
    if (entreprise) return entreprise;

    throw new UnauthorizedException();
  }

  async getStudent(payload) {
    const user = await this.studentRepository.findOne({
      id: payload.id,
    });
    if (user) {
      delete user.password;
      user.role = 'student';
      return user; // this gets injected in request !
    }
  }

  async getProfessor(payload) {
    const user = await this.professorRepository.findOne({
      id: payload.id,
    });
    if (user) {
      delete user.password;
      user.role = 'professor';
      return user; // this gets injected in request !
    }
  }

  async getAdmin(payload) {
    const user = await this.adminRepository.findOne({
      id: payload.id,
    });
    if (user) {
      delete user.password;
      user.role = 'admin';
      return user; // this gets injected in request !
    }
  }

  async getEntreprise(payload) {
    const user = await this.entrepriseRepository.findOne({
      id: payload.id,
    });
    if (user) {
      delete user.password;
      user.role = 'entreprise';
      return user; // this gets injected in request !
    }
  }
}
