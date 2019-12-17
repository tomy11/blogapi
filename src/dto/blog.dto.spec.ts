import { BlogDto } from './blog.dto';

describe('Blog', () => {
  it('should be defined', () => {
    expect(new BlogDto()).toBeDefined();
  });
});
