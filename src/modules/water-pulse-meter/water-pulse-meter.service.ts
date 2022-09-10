import { Injectable } from '@nestjs/common';
import rpio, { PULL_UP } from 'rpio';

@Injectable()
export class WaterPulseMeterService {
  private liters = 0;

  constructor() {
    // Setup the gpio pins
    rpio.init({
      // mock: 'raspi-b',
      close_on_exit: true,
    });

    rpio.open(16, rpio.INPUT, PULL_UP);

    rpio.poll(16, this.poll, rpio.POLL_LOW);
  }

  async poll(pin: number): Promise<void> {
    rpio.msleep(20);

    if (rpio.read(pin)) {
      return;
    }

    this.pulse();
  }

  async pulse(): Promise<void> {
    // Increase the liter usage
    this.liters++;

    // eslint-disable-next-line no-console
    console.log(`Liters: ${this.liters}`);
  }
}
