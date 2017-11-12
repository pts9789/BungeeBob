const Jumper = require('./jumper.js');
const Platform = require('./platform.js');

class Game{

  constructor(){
    this.image = new Image();
    this.image.src = "./assets/background.jpg";
    this.numPlatforms = 6;
    this.platforms = [];
    this.platformWidth = 100;
    this.platformHeight = 10;
    this.animate = null;
    this.jumper = new Jumper(this);
    this.speed = 2;
  }

  clearScreen(){
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(this.image,0,0);
  }

  createPlatforms() {
    let Y = 0;

    for (let i = 0; i < this.numPlatforms; i++) {
      this.platforms[i] = new Platform(this, Math.random() * (width-this.platformWidth), Y);
      if (Y < height - this.platformHeight) {
        Y += Math.floor(height / this.numPlatforms);
      }
    }
  }

  updatePlatforms() {
    for (let i = 0; i < this.platforms; i++) {
      this.platforms[i].Y += this.speed;
    }
  }

   onPlatformCollision() {
     this.jumper.startJump();
     this.speed *= 1.02;
     }

     gameOver() {
       if (this.jumper.Y > height - this.jumper.height/2) {
         return true;
       } else {
         return false;
       }
     }

   gameLoop() {

     this.clearScreen();
     this.updatePlatforms();

     this.jumper.render();

     this.platforms.forEach((platform) => {
       platform.render();
     });

     this.checkPlatformCollision();

     if (!this.gameOver()) {
       this.animate = setTimeout(this.gameLoop.bind(this), 20);
     } else {
        // setTimeout(this.splash.bind(this), 1000);
     }

   }
   startGame() {
     this.jumper.restart();
     this.jumper.setPos(Math.floor((width - this.jumper.width)*0.25), (height - this.jumper.height)*0.25);
     this.createPlatforms();
     this.jumper.jump();
     this.speed = 2;
     this.gameLoop();
   }


 }


module.exports = Game;
