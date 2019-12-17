import { Connection, Repository } from 'typeorm';
import { PostMeta } from '../entity/postmeta.entity';

export const postmetaProvider = [
  {
    provide: 'POSTMETA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(PostMeta),
    inject: ['DATABASE_CONNECTION'],
  },
];