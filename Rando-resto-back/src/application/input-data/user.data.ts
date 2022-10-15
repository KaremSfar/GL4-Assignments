import { Role } from 'src/domain/models/role.enum';

// Dto for registering
export class UserCreateInputData {
  username: string;

  email: string;

  password: string;

  role: Role;
}

// Logging in DTO
export class UserLoginInputData {
  email: string;

  password: string;

  role: Role;
}
