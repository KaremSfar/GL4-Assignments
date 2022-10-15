import { User } from 'src/domain/shared/user.entity';

export abstract class UserRepository {
  abstract save(user: User): Promise<User>;
  abstract findOneByEmail(email: string): Promise<User>;
  abstract findOneById(id: string): Promise<User>;
}
