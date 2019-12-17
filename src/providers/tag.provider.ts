import { Connection, Repository } from 'typeorm';
import { Tag } from '../entity/tag.entity';

export const tagProvider = [
  {
    provide: 'TAG_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Tag),
    inject: ['DATABASE_CONNECTION'],
  },
];