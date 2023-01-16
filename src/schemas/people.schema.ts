import * as mongoose from 'mongoose';

export const PeopleSchema = new mongoose.Schema({
  name: String,
  last_name: String,
  age: Number,
  address: String,
});
