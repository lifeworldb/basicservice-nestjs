import { Controller, Inject } from '@nestjs/common';
import { BasicService } from './basic.service';
import { PinoLogger } from 'nestjs-pino';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class BasicController {
  constructor(
    @Inject('BasicService')
    private service: BasicService,
    private readonly logger: PinoLogger
  ) {
    logger.setContext(BasicController.name);
  }

  @GrpcMethod('BasicService', 'ping')
  async ping(data: string): Promise<string> {
    return this.service.pong(data);
  }
}
