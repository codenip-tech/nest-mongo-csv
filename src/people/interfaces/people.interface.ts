import { Document } from 'mongoose';

export interface People extends Document {
  readonly name: string;
  readonly lastName: string;
  readonly age: number;
  readonly address: string;
}
