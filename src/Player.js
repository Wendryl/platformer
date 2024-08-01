const GRAVITY = 1;

export class Player {
  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {HTMLCanvasElement} canvas
   */
  constructor(ctx, canvas) {
    this.x = canvas.width / 2 - 20;
    this.y = canvas.height - 40;
    this.yVel = GRAVITY;
    this.xVel = 0;
    this.width = 20;
    this.height = 40;
    this.color = '#ff00004d';
    this.ctx = ctx;
    this.canvas = canvas;
    this.floor = this.canvas.height;
    this.#handleControls();
  }

  render() {
    this.#updatePosition();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  #checkColisions() {
    if (this.y + this.height >= this.floor) {
      this.yVel = 0;
    } else {
      this.yVel += GRAVITY;
    }

    if (this.x >= this.canvas.width - this.width) {
      this.x = this.canvas.width - this.width;
      this.xVel = 0;
    }

    if (this.x <= 0) {
      this.x = 0;
      this.xVel = 0;
    }
  }

  #updatePosition() {
    this.y += this.yVel;
    this.x += this.xVel;
    this.#checkColisions();
  }

  #handleControls() {
    addEventListener('keypress', ev => {
      if (ev.key === 'w') {
        this.yVel = -15;
      }

      if (ev.key === 'a') {
        this.xVel = -10;
      }

      if (ev.key === 'd') {
        this.xVel = 10;
      }
    });

    addEventListener('keyup', ev => {
      if (ev.key === 'a' || ev.key === 'd') {
        this.xVel = 0;
      }
    });
  }
}
