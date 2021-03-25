import { ConflictException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserSubscribeDto } from '../dto/user-subscribe.dto';
import { UserEntity } from '../../generics/user.entity';
import { UserLoginDto } from '../dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';

//To encrypt the users' passwords
import * as bcrypt from 'bcrypt';

//Abstract Class for registering Students, Professors And Administrators !
export abstract class AuthService {
  constructor(
    private repository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  //Registers a user
  async register(registerDto: UserSubscribeDto): Promise<Partial<UserEntity>> {
    const user = this.repository.create({
      ...registerDto,
    });
    const salt = await bcrypt.genSalt();

    user.password = await bcrypt.hash(user.password, salt);

    try {
      await this.repository.save(user);
    } catch (e) {
      throw new ConflictException('username or email already existing');
    }
    delete user.password;
    delete user.createdAt;
    delete user.deletedAt;
    return user;
  }

  //For a regsitered user return his access token
  async login(credentials: UserLoginDto) {
    const { email, password } = credentials;
    const user = await this.repository.findOne({ email });

    if (!user) throw new NotFoundException('email or password incorrect');

    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
      };
      const jwt = this.jwtService.sign(payload);
      return { 'access-token': jwt };
    }
    throw new NotFoundException('email or password incorrect');
  }
}
