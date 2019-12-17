import { Connection, Repository } from 'typeorm';
import { Post } from '../entity/post.entity';

export const postProvider = [
  {
    provide: 'POST_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Post),
    inject: ['DATABASE_CONNECTION'],
  },
];