import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

//To encrypt the users' passwords
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/infrastructure/database/mapper/user.entity';
import { RepositoryFactory } from '../services/repo.factory';
import { PayloadSigner } from '../services/payload-signer';
import {
  UserCreateInputData,
  UserLoginInputData,
} from '../input-data/user.data';
import { UserRepository } from '../repositories/user.respository';
import { CreateUserDataMapper } from '../data-model-mappers/user-mapper';

@Injectable()
export class AuthInteractor {
  constructor(
    private repoFactory: RepositoryFactory,
    private payloadSigner: PayloadSigner,
  ) {}

  //Registers a user
  async register(
    userCreate: UserCreateInputData,
  ): Promise<Partial<UserEntity>> {
    const user = CreateUserDataMapper.toClass(userCreate);

    const repository = this.repoFactory.getRepository(user.role);

    const salt = await bcrypt.genSalt();

    user.password = await bcrypt.hash(user.password, salt);

    try {
      await repository.save(user);
    } catch (e) {
      throw new ConflictException('username or email already existing');
    }
    delete user.password;
    return user;
  }

  //For a regsitered user return his access token
  async login(credentials: UserLoginInputData) {
    const repository: UserRepository = this.repoFactory.getRepository(
      credentials.role,
    );

    const { email, password } = credentials;
    const user = await repository.findOneByEmail(email);

    if (!user) throw new NotFoundException('email or password incorrect');

    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: credentials.role,
      };
      const jwt = this.payloadSigner.sign(payload);
      return { 'access-token': jwt };
    }
    throw new NotFoundException('email or password incorrect');
  }
}
