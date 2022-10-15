import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/domain/models/role.enum';
import { UserRepository } from '../repositories/user.respository';

// Repository Factory for authenticating
@Injectable()
export class RepositoryFactory {
  constructor(
    @Inject('CustomerRepository') private customerRepo: UserRepository,
    @Inject('RestoOwnerRepository') private restoOwnerRepo: UserRepository,
  ) {}
  // Returns the Right repository depending on the user entity' Role
  getRepository(role: Role): UserRepository {
    if (role === Role.Customer) return this.customerRepo;
    if (role === Role.RestoOwner) return this.restoOwnerRepo;
  }
}
