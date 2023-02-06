import { Module } from '@nestjs/common';
import { PeopleModule } from 'src/people/people.module';
import { PeopleService } from 'src/people/people.service';
import { FileController } from './file.controller';
import { FileService } from './file.service';

@Module({
  imports: [PeopleModule],
  controllers: [FileController],
  providers: [FileService, PeopleService],
})
export class FileModule {}
