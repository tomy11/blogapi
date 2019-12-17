import { Connection, Repository } from 'typeorm';
import { Image } from '../entity/image.entity';

export const imageProvider = [
  {
    provide: 'IMAGE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Image),
    inject: ['DATABASE_CONNECTION'],
  },
];