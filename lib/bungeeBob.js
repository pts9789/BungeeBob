/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(1);

// these are global
width = 900;
height = 600;

gameCanvas = document.querySelector('canvas');
gameCanvas.width = width;
gameCanvas.height = height;
ctx = gameCanvas.getContext("2d");

let innerWidth = window.innerWidth;
innerWidth = (innerWidth - width)/2;

addEventListener('resize', () => {
    innerWidth = window.innerWidth;
    innerWidth = (innerWidth - width)/2;
});

const bungeeBob = new Game();

addEventListener('mousemove', (e) => {
  bungeeBob.jumper.X = event.clientX - (innerWidth+20);
});

gameCanvas.addEventListener('click', (e) => {
  bungeeBob.startGame();
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Jumper = __webpack_require__(2);
const Platform = __webpack_require__(3);

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

       ) {
          currentGame.onPlatformCollision();
         }
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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

class Jumper{
  constructor(game){
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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Platform{

  constructor(game, x, y){
    this.game = game;
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


/***/ })
/******/ ]);
//# sourceMappingURL=bungeeBob.js.map