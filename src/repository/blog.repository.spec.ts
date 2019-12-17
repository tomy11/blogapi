import { Test, TestingModule } from '@nestjs/testing';
import { BlogRepository } from './blog.repository';

describe('Blog', () => {
  let provider: BlogRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogRepository],
    }).compile();

    provider = module.get<BlogRepository>(BlogRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
