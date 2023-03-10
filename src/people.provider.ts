import { Connection } from 'mongoose';
import { PeopleSchema } from './people/schemas/people.schema';

export const peopleProviders = [
  {
    provide: 'PEOPLE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('People', PeopleSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
