import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminRepository } from 'src/gestion-pfe/repositories/admin.repository';
import { AuthService } from '../auth.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminAuthService extends AuthService {
  constructor(
    @InjectRepository(AdminRepository)
    adminRepository: AdminRepository,
    jwtService: JwtService,
  ) {
    super(adminRepository, jwtService);
  }
}
