// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1;
    const yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function Ball(x, y, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.update = () => {
      if (this.y + this.radius > canvas.height) {
        this.dy = -this.dy;
      } else {
        this.dy +=2;
      }
      this.y += this.dy;
      this.draw();
    };

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    };
}

addEventListener('mousemove', (e) => {
  ball.x = event.clientX;
});

let ball;
function init() {
  ball = new Ball(canvas.width /2, canvas.height /2, 5, 20, 'blue');
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);


  ball.update();

}

init();

animate();
