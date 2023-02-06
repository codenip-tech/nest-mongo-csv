import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { People } from './dto/people.dto';

@Injectable()
export class PeopleService {
  constructor(
    @Inject('PEOPLE_MODEL')
    private peopleModel: Model<People>,
  ) {}

  async findAll(): Promise<People[]> {
    return this.peopleModel.find().exec();
  }

  async save(peopleDTO: People) {
    this.peopleModel.create(peopleDTO);
  }
}
