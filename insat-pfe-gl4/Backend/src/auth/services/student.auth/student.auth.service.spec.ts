import { Test, TestingModule } from '@nestjs/testing';
import { StudentAuthService } from './student.auth.service';

describe('StudentService', () => {
  let service: StudentAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentAuthService],
    }).compile();

    service = module.get<StudentAuthService>(StudentAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
