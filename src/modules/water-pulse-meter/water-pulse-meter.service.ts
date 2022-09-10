import { Injectable } from '@nestjs/common';
import rpio, { PULL_UP } from 'rpio';

@Injectable()
export class WaterPulseMeterService {
  private readonly liters: number = 0;

  constructor() {
    // Setup the gpio pins
    rpio.init({
      mock: 'raspi-b',
      close_on_exit: true,
    });

    rpio.open(16, rpio.INPUT, PULL_UP);

    //
  }

  async pulse(): Promise<void> {
    // Increase the liter usage
  }
}
