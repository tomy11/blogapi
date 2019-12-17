import { Connection, Repository } from 'typeorm';
import { PostTag } from '../entity/posttag.entity';

export const posttagProvider = [
  {
    provide: 'POSTTAG_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(PostTag),
    inject: ['DATABASE_CONNECTION'],
  },
];