import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/application/repositories/user.respository';
import { User } from 'src/domain/shared/user.entity';
import { Repository } from 'typeorm';
import { RestoOwnerEntity } from '../mapper/resto-owner.entity';

@Injectable()
export class RestoOwnerRepo implements UserRepository {
  constructor(
    @InjectRepository(RestoOwnerEntity)
    private restoRepo: Repository<RestoOwnerEntity>,
  ) {}
  save(user: User): Promise<User> {
    return this.save(user);
  }
  findOneById(id: string): Promise<User> {
    return this.restoRepo.findOne({ id: id });
  }
  findOneByEmail(email: string): Promise<User> {
    return this.restoRepo.findOne({ email });
  }
}
