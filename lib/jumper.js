class Jumper{
  constructor(){
    this.image = new Image();
    this.image.src = "./assets/jumping_sponge.png";
    this.width = 72;
    this.height = 73;
    this.X = 0;
    this.Y = 0;
    this.jumping = false;
    this.falling = false;
    this.jumpV = 0;
    this.fallV = 0;
  }

  setPos(x, y){
    this.X = x;
    this.Y = y;
  }

  render(){
    ctx.drawImage(this.image, 0, 0, this.width, this.height, this.X, this.Y, this.width, this.height);
  }

  jump(){
    if (!this.jumping && !this.falling) {
      this.jumping = true;
      this.jumpV = 20;
      this.fallV = 0;
    }
  }

  startJump(){
    this.falling = false;
    this.fallV = 0;
    this.jump();
  }

  restart(){
    this.jumping = false;
    this.falling = false;
    this.jumpV = 0;
    this.fallV = 0;
  }
}

module.exports = Jumper;
