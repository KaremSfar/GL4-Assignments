import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { EntrepriseEntity } from 'src/entreprise/entities/entreprise.entity';
import { EntrepriseRepository } from 'src/entreprise/repositories/entreprise.repository';
import { Repository } from 'typeorm';
import { AuthService } from '../auth.service';

@Injectable()
export class EntrepriseAuthService extends AuthService {
  constructor(
    @InjectRepository(EntrepriseRepository)
    entrepriseRepo: EntrepriseRepository,
    jwtService: JwtService,
  ) {
    super(entrepriseRepo, jwtService);
  }
}
