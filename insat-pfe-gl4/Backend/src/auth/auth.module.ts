import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from '../gestion-pfe/repositories/admin.repository';
import { ProfessorRepository } from '../gestion-pfe/repositories/professor.repository';
import { StudentRepository } from '../gestion-pfe/repositories/student.repository';
import { StudentAuthController } from './controllers/student.auth.controller';
import { ProfessorAuthController } from './controllers/professor.auth.controller';
import { AdminAuthController } from './controllers/admin.auth.controller';
import { StudentAuthService } from './services/student.auth/student.auth.service';
import { ProfessorAuthService } from './services/professor.auth/professor.auth.service';
import { AdminAuthService } from './services/admin.auth/admin.auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { PassportJwtStrategy } from './strategies/passport-jwt.strategy';
import { GestionPfeModule } from 'src/gestion-pfe/gestion-pfe.module';
import { RolesGuard } from './guards/roles.guard';
import { EntrepriseAuthService } from './services/entreprise.auth/entreprise.auth.service';
import { EntrepriseAuthController } from './controllers/entreprise.auth.controller';
import { EntrepriseRepository } from 'src/entreprise/repositories/entreprise.repository';

dotenv.config();

@Global()
@Module({
  imports: [
    GestionPfeModule,
    TypeOrmModule.forFeature([
      StudentRepository,
      ProfessorRepository,
      AdminRepository,
      EntrepriseRepository,
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: 36000,
      },
    }),
  ],
  controllers: [
    StudentAuthController,
    ProfessorAuthController,
    AdminAuthController,
    EntrepriseAuthController,
  ],
  providers: [
    StudentAuthService,
    ProfessorAuthService,
    AdminAuthService,
    PassportJwtStrategy,
    EntrepriseAuthService,
    RolesGuard,
  ],
  exports: [PassportJwtStrategy, PassportModule, RolesGuard],
})
export class AuthModule {}
