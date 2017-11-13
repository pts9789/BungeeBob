class Bubble{

  constructor(){
    this.X =  Math.random() * width;
    this.Y = Math.random() * height;
    this.rise =  (Math.random() * 2) + 0.5 ;
    this.image = new Image();
    this.image.src = ("./assets/bubbles" + Math.floor(Math.random()*6) + ".png");
  }
}

module.exports = Bubble;
