class Jumper{
  constructor() {
    this.image = new Image();
    this.image.src = "./assets/Spongebob.gif";
    this.width = 40;
    this.height = 80;
    this.x = 0;
    this.y = 0;
    this.jumping = false;
    this.falling = false;
    this.jumpV = 0;
    this.fallV = 0;
  }

  setPos(x, y) {
    this.x = x;
    this.y = y;
  }

  render() {
    c.drawImage(this.image, 0, 0, this.width, this.height, this.X, this.Y, this.width, this.height);
  }

  jump() {
    if (!this.jumping && !this.falling) {
      this.jumping = true;
      this.jumpV = 20;
      this.fallV = 0;
    }
  }

  collision() {
    this.falling = false;
    this.fallV = 0;
    this.jump();
  }

}


module.exports = Jumper;
