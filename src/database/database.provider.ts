import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb://root:password@nest-mongo:27017/nest_mongo_database?authSource=admin',
      ),
  },
];
