import { Connection, Repository } from 'typeorm';
import { Category } from '../entity/category.entity';

export const categoryProvider = [
  {
    provide: 'CATEGORY_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Category),
    inject: ['DATABASE_CONNECTION'],
  },
];