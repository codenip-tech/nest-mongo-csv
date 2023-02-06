import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { parse } from 'papaparse';

@Injectable()
export class FileService {
  getFileFromFileName(filename: string): Buffer {
    return readFileSync(`uploads/${filename}`);
  }

  extractContentToString(buffer: Buffer): string {
    return buffer.toString();
  }

  parseCsvContent(content: string) {
    const parsedCsv = parse(content, {
      header: true,
    });

    return parsedCsv.data;
  }
}
