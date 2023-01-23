import { Module } from '@nestjs/common';
import { CsvModule } from 'nest-csv-parser';
import { UploadController } from './upload.controller';

@Module({
  imports: [CsvModule],
  controllers: [UploadController],
})
export class UploadModule {}
