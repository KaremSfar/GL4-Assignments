import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RapportPfeController } from './controllers/rapport-pfe.controller';
import { SessionPfeController } from './controllers/session-pfe.controller';
import { SoutenanceController } from './controllers/soutenance.controller';
import { SujetPfeController } from './controllers/sujet-pfe.controller';
import { SalleSoutenanceController } from './controllers/salle-soutenance.controller';

import { RapportPfeEntity } from './entities/rapport-pfe.entity';
import { SessionPfeEntity } from './entities/session-pfe.entity';
import { SoutenanceEntity } from './entities/soutenance.entity';
import { SujetPfeEntity } from './entities/sujet-pfe.entity';
import { SalleSoutenanceEntity } from './entities/salle-soutenance.entity';

import { AdminRepository } from './repositories/admin.repository';
import { ProfessorRepository } from './repositories/professor.repository';
import { StudentRepository } from './repositories/student.repository';

import { SessionPfeService } from './services/session-pfe.service';
import { SoutenanceService } from './services/soutenance.service';
import { SujetPfeService } from './services/sujet-pfe.service';
import { SalleSoutenanceService } from './services/salle-soutenance.service';
import { SessionHoraireSalleUniqueConstraint } from './validators/sessionHoraire-salle-uniqe.validator';
import { RapportPfeService } from './services/rapport-pfe.service';
import { SessionPfeService } from './services/session-pfe.service';
import { SoutenanceService } from './services/soutenance.service';
import { SujetPfeService } from './services/sujet-pfe.service';
import { editRapportFileName } from './utils/edit.rapport.file.name';
import { diskStorage } from 'multer';
import { StudentController } from './controllers/student.controller';
import { StudentService } from './services/student.service';
import { StudentEntity } from './entities/student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SujetPfeEntity,
      SoutenanceEntity,
      SessionPfeEntity,
      SalleSoutenanceEntity,
      RapportPfeEntity,
      StudentEntity,
    ]),
    MulterModule.register(),
  ],
  controllers: [
    SujetPfeController,
    SoutenanceController,
    SessionPfeController,
    RapportPfeController,
    SalleSoutenanceController,
    StudentController,
  ],
  providers: [
    SujetPfeService,
    SoutenanceService,
    SessionPfeService,
    SalleSoutenanceService,
    StudentRepository,
    ProfessorRepository,
    AdminRepository,
    SessionHoraireSalleUniqueConstraint,
    RapportPfeService,
    StudentService,
  ],
})
export class GestionPfeModule {}
