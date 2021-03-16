import { prop } from '@typegoose/typegoose';

export class Basic {
  @prop()
  msg: string;
}
