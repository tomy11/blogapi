import { Connection, Repository } from 'typeorm';
import { Blog } from '../entity/blog.entity';

export const blogProvider = [
  {
    provide: 'BLOG_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Blog),
    inject: ['DATABASE_CONNECTION'],
  },
];