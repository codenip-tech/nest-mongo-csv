import { Controller, Post, Param } from '@nestjs/common';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @Post(':fileName/process')
  processFile(@Param('fileName') fileName: string) {
    const csv = this.fileService.getFileFromFileName(fileName);
    const content = this.fileService.extractContentToString(csv);
    const parsedCsv = this.fileService.parseCsvContent(content);

    console.log(parsedCsv);
  }
}
