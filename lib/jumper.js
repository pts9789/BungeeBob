class Jumper{
  constructor() {
    this.image = new Image();
    this.image.src = "./assets/Spongebob.gif";
    this.x = 0;
    this.y = 0;
    this.jumping = false;
    this.falling = false;
    this.jumpV = 0;
    this.fallV = 0;
  }
}
