import { Player } from './Player.js';
import { PlatformFactory } from './PlatformFactory.js';

const canvas = document.querySelector('canvas');
canvas.width = 500;
canvas.height = 500;
const ctx = canvas.getContext('2d');
const player = new Player(ctx, canvas);
const platforms = PlatformFactory.createPlatforms(ctx, canvas, 3);

function drawCanvas() {
  ctx.fillStyle = '#dedede';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function animate() {
  drawCanvas();
  player.render();
  platforms.forEach(p => {
    if(
      player.x + player.width >= p.x &&
      player.x <= p.x + p.width &&
      (
        player.y + player.height <= p.y &&
        player.y + player.height >= p.y - 4
      )
    ) {
      p.color = '#00ff009d'
      player.y = p.y - player.height;
      player.floor = p.y;
      player.yVel = 0;
    } else {
      player.floor = canvas.height;
      p.color = '#ffffff9d';
    }

    p.render();
  });
  window.requestAnimationFrame(animate);
}

function main() {
  animate();
}

window.onload = () => {
  main();
}
