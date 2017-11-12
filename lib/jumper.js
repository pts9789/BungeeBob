class Jumper{

  constructor(x, y, dy, radius, max, color, c) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    this.max = max;
    this.color = color;
    this.c = c;
    this.update = this.update.bind(this);
    this.collision = this.collision.bind(this);
    this.draw = this.draw.bind(this);
  }

  distance(x1, y1, x2, y2) {
    const xDist = x2 - x1;
    const yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
  }

  update(platforms, c) {


    // for (let i = 0; i < platforms.length; i++) {
    //   if (this.y >= platforms[i].y && this.x < platforms[i].x && this.x > platforms[i].x + 100) {
    //     this.collision();
    //     console.log("colission");
    //   } else {
    //     this.dy +=0.3;
    //   }
    for (let i = 0; i < platforms.length; i++) {
      if (this.distance(this.x, this.y, platforms[i].x, platforms[i].y) - this.radius*2 < -1) {
        this.collision();
      } else {
        this.dy +=0.1;
      }
    }
    // platforms.forEach((platform) => {
    //   if (distance(this.x, this.y, platform.x, platform.y) - this.radius*2 < 0) {
    //     this.collision();
    //   } else {
    //     this.dy +=0.3;
    //   }
    // });

    this.y += this.dy;
    this.max += this.dy;

    this.draw(c);
  }

  collision() {
    this.dy = -this.dy;
  }

  draw(c) {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

}


module.exports = Jumper;
