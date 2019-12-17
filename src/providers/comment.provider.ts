import { Connection, Repository } from 'typeorm';
import { Comment } from '../entity/comment.entity';

export const commentProvider = [
  {
    provide: 'COMMENT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Comment),
    inject: ['DATABASE_CONNECTION'],
  },
];