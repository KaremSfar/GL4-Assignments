import { UserEntity} from './user.entity';

describe('UserEntity.Ts', () => {
  it('should be defined', () => {
    expect(new UserEntity()).toBeDefined();
  });
});
