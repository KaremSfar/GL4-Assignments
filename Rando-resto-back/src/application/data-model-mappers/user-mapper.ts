import { User } from 'src/domain/shared/user.entity';
import { UserCreateInputData } from '../input-data/user.data';

export class CreateUserDataMapper {
  static toClass(createUser: UserCreateInputData): User {
    const user = (<any>{ ...createUser }) as User;
    return user;
  }
}
