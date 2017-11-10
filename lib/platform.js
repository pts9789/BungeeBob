class Platform{

  constructor(x, y) {
    this.image = new Image();
    this.image.src = "./assets/seaweed.png";
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 10;
  }

  render(){
    c.drawImage(this.image, 0, 0, this.width, this.height, this.X, this.Y, this.width, this.height);
  }

}

module.exports = Platform;
