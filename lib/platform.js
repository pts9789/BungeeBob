class Platform{

  constructor(c) {
    this.c = c;
    this.width = 50;
    this.height = 10;
    this.color = "red";
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
  }

  startingPlat(){
    this.x = Math.floor(Math.random() * 700);
    this.y = Math.floor(Math.random() * 600);
    if (this.x > 600) {
      this.x -= 100;
    }
    return this;
  }

  newPlat(){
    this.x = Math.floor(Math.random() * 700);
    this.y = Math.floor(Math.random() * 600)*-1;
    if (this.x > 600) {
      this.x -= 100;
    }
    return this;
  }

  draw(c) {
    c.fillStyle= this.color;
    c.fillRect(this.x, this.y, this.width, this.height);
  }

  update(c) {
    this.y += 0.5;
    this.draw(c);
  }


}

module.exports = Platform;
