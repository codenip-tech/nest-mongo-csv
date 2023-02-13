import { Module } from '@nestjs/common';
import { PeopleModule } from 'src/people/people.module';
import { FileController } from './file.controller';
import { FileService } from './file.service';

@Module({
  imports: [PeopleModule],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
