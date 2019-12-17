import { Connection, Repository } from 'typeorm';
import { PostCategory } from '../entity/postcategory.entity';

export const postCategoryProvider = [
  {
    provide: 'POSTCATEGORY_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(PostCategory),
    inject: ['DATABASE_CONNECTION'],
  },
];