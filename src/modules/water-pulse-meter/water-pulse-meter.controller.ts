import { Controller, Get } from '@nestjs/common';
import { WaterPulseMeterService } from './water-pulse-meter.service';

@Controller('water-pulse-meter')
export class WaterPulseMeterController {
  constructor(private readonly waterPulseMeterService: WaterPulseMeterService) {}

  @Get('test-pulse')
  async testPulse(): Promise<void> {
    await this.waterPulseMeterService.pulse();
  }
}
