import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Basic } from './basic.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class BasicService {
  constructor(
    @InjectModel(Basic)
    private readonly model: ReturnModelType<typeof Basic>,
    private readonly logger: PinoLogger
  ) {
    logger.setContext(Basic.name);
  }

  async pong(data: string): Promise<string> {
    return Promise.resolve(data);
  }
}
