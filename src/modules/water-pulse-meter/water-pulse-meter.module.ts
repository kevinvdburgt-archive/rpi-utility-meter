import { Module } from '@nestjs/common';
import { WaterPulseMeterController } from './water-pulse-meter.controller';
import { WaterPulseMeterService } from './water-pulse-meter.service';

@Module({
  controllers: [WaterPulseMeterController],
  exports: [],
  imports: [],
  providers: [WaterPulseMeterService],
})
export class WaterPulseMeterModule {}
