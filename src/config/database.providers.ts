import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mssql',
      host: 'NB_PRACHYA_W\\SQLEXPRESS',
      port: 1433,
      username: 'meta',
      password: '057442852Chi',
      database: 'blogdb',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
      migrations: [
        "src/migration/**/*.ts"
     ],
    }),
  },
];