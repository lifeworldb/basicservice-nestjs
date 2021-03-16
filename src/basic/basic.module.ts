import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Basic } from './basic.model';
import { BasicService } from './basic.service';
import { BasicController } from './basic.controller';

@Module({
  imports: [TypegooseModule.forFeature([Basic])],
  providers: [BasicService],
  controllers: [BasicController]
})
export class BasicModule {}
