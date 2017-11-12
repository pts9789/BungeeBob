class Platform{

  constructor(x, y){
    this.image = new Image();
    this.image.src = "./assets/seaweed.png";
    this.X = Math.floor(x);
    this.Y = y;
    this.currentPlatform = false;
  }

  render(){
    ctx.drawImage(this.image, 0, 0, 100, 10, this.X, this.Y, 100, 10);
    return this;
  }
}

module.exports = Platform;
