import { Module } from '@nestjs/common';
import { WaterPulseMeterModule } from './modules/water-pulse-meter/water-pulse-meter.module';

@Module({
  imports: [WaterPulseMeterModule],
})
export class AppModule {}
