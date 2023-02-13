import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { peopleProviders } from 'src/people.provider';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PeopleController],
  providers: [PeopleService, ...peopleProviders],
  exports: [PeopleService],
})
export class PeopleModule {}
