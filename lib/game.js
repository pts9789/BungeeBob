const Jumper = require('./jumper.js');
const Platform = require('./platform.js');
const JellyFish = require('./jellyfish.js');

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
    this.jellyfish = null;
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

  createJellyFish() {
    this.jellyfish = new JellyFish();
  }

  renderJellyFish() {
      ctx.drawImage(this.jellyfish.image, 0, 0, 50, 31, this.jellyfish.X, this.jellyfish.Y, 50, 31);
  }

  updateJellyFish() {
    if (this.jellyfish.X - 50 > width || this.jellyfish.hit || this.jellyfish.Y > height) {
      this.jellyfish.hit = false;
      this.jellyfish.X = -50;
      this.jellyfish.Y = Math.random() * 500;
    } else {
      this.jellyfish.X += this.jellyfish.swim;
      this.jellyfish.Y -= 0.5;
    }
  }

  swimDown(rate){
    this.jellyfish.Y += rate;
  }


  currentJumperJumping() {
    let currentJumper = this.jumper;
    let currentGame = this;

    if (currentJumper.Y > height * 0.25) {
      currentJumper.setPos(currentJumper.X, currentJumper.Y - currentJumper.jumpV);
    } else {
      // this.swimDown(currentJumper.jumpV / 2);
      this.platforms.forEach((platform, index) => {
        platform.Y += currentJumper.jumpV * 0.55;
      });
    }
    currentJumper.jumpV --;

    this.platforms.forEach((platform, index) => {
      if (platform.Y > height) {
        currentGame.platforms[index] = new Platform(currentGame, Math.random() * (width - currentGame.platformWidth), platform.Y - (height+50) );
      }
      platform.Y += this.speed;
    });

    if (currentJumper.jumpV === 0) {
      currentJumper.jumping = false;
      currentJumper.falling = true;
      currentJumper.fallV = 1;
    }
  }

  currentJumperFalling() {
    let currentJumper = this.jumper;

    if (currentJumper.Y < height - currentJumper.height/2) {
      currentJumper.setPos(currentJumper.X, currentJumper.Y + currentJumper.fallV);
      currentJumper.fallV ++;
      this.platforms.forEach((platform, index) => {
        platform.Y += this.speed;
      });
    } else {
      currentJumper.startJump();
    }
  }

  checkPlatformCollision(){
    let currentGame = this;

    for (let i = 0; i < this.platforms.length; i++) {

      if ((currentGame.jumper.falling) &&
          !(currentGame.jumper.X + currentGame.jumper.width < this.platforms[i].X ||
            currentGame.jumper.X > this.platforms[i].X + this.platformWidth ||
            currentGame.jumper.Y + currentGame.jumper.height < this.platforms[i].Y ||
            currentGame.jumper.Y > this.platforms[i].Y + this.platformHeight)

         ) {currentGame.onPlatformCollision();}
    }
  }

  onPlatformCollision() {
    this.jumper.startJump();
    this.speed *= 1.01;
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
    this.renderJellyFish();
    this.updateJellyFish();

    if (this.jumper.jumping) {
      this.currentJumperJumping();
    }

    if (this.jumper.falling) {
     this.currentJumperFalling();
    }

    this.jumper.render();

    this.platforms.forEach((platform) => {
     platform.render();
    });

    this.checkPlatformCollision();

    if (!this.gameOver()) {
     this.animate = setTimeout(this.gameLoop.bind(this), 20);
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
