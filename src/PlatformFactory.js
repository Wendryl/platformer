import { Platform } from './Platform.js';

export class PlatformFactory {
  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {HTMLCanvasElement} canvas
   * @param {number} amount
   */
  static createPlatforms(ctx, canvas, amount) {
    let platforms = [];
    for (let i = 0; i < amount; i++) {
      platforms.push(new Platform(ctx, canvas));
    }

    return platforms;
  }
}
