import { Controller, Post, Param } from '@nestjs/common';
import { People } from 'src/people/dto/people.dto';
import { PeopleService } from 'src/people/people.service';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(
    private fileService: FileService,
    private peopleService: PeopleService,
  ) {}

  @Post(':fileName/process')
  processFile(@Param('fileName') fileName: string) {
    const csv = this.fileService.getFileFromFileName(fileName);
    const content = this.fileService.extractContentToString(csv);
    const parsedCsv = this.fileService.parseCsvContent(content);

    parsedCsv.map((item: People) => {
      this.peopleService.save(item);
    });
  }
}
