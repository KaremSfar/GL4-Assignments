import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/application/repositories/user.respository';
import { User } from 'src/domain/shared/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CustomerEntity } from '../mapper/customer.entity';

export class CustomerRepo implements UserRepository {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepo: Repository<CustomerEntity>,
  ) {}
  save(user: User): Promise<User> {
    return this.customerRepo.save(user);
  }

  findOneById(id: string): Promise<User> {
    return this.customerRepo.findOne({ id: id });
  }
  findOneByEmail(email: string): Promise<User> {
    return this.customerRepo.findOne({ email });
  }
}
