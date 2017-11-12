class JellyFish{

  constructor(){
    this.X =  Math.random() * width;
    this.Y = Math.random() * height;
    this.hit = false;
    this.swim =  (Math.random() * 5) + 0.5 ;
    this.image = new Image();
    this.image.src = ("./assets/jellyfish.png");
  }
}

module.exports = JellyFish;
