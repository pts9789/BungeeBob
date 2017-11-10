let Jumper = require("./jumper.js");

// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = 700;


function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function Ball(x, y, dy, radius, max, color) {
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.radius = radius;
  this.max = max;
  this.color = color;

  this.update = (platforms) => {

    platforms.forEach((platform) => {
      if (distance(this.x, this.y, platform.x, platform.y) - this.radius*2 < 0) {
        this.collision();
        // this.dy = -this.dy;
        // this.dy -= 0.3;
        // console.log("jump");
      } else {
        this.dy +=0.3;
      }
    });

    //
    // if (this.y + this.radius > canvas.height) {
    //   this.dy = -this.dy;
    // } else {
    //   this.dy += 0.01;
    // }
    this.y += this.dy;
    this.max += this.dy;
    this.draw();
  };

  this.collision = () => {
    this.dy = -this.dy;
  };

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };
}

function Platform(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;

  this.draw = () => {
    c.fillStyle= this.color;
    c.fillRect(this.x, this.y, this.width, this.height);
  };


}

addEventListener('mousemove', (e) => {
  ball.x = event.clientX;
  jumper.x = event.clientX;
});

let jumper;
let ball;
let plat1;
let plat2;
let plat3;
let platforms;
let currentPlatform;
function init() {
  jumper = new Jumper();
  ball = new Ball(100, 100, 3, 20, 2, 'blue');
  plat1 = new Platform(100, 650, 50, 10, "red");
  plat2 = new Platform(600, 400, 50, 10, "red");
  plat3 = new Platform(900, 300, 50, 10, "red");
  platforms = [plat1, plat2, plat3];
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  plat1.draw();
  plat2.draw();
  plat3.draw();

  ball.update(platforms);
}



init();

animate();
