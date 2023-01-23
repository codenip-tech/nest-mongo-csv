import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import { DatabaseModule } from './database/database.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [UploadModule, DatabaseModule, PeopleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
