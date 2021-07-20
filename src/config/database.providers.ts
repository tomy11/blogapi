import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mssql',
      host: 'NB_PRACHYA_W\\SQLEXPRESS',
      port: 1433,
      username: 'users',
      password: 'password',
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
