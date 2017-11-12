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
/***/ (function(module, exports) {

// const Jumper = require('./jumper.js');
// const Platform = require('./platform.js');
// // Initial Setup
// const canvas = document.querySelector('canvas');
// const c = canvas.getContext('2d');
//
// canvas.width = 700;
// canvas.height = 600;
//
//
// function distance(x1, y1, x2, y2) {
//   const xDist = x2 - x1;
//   const yDist = y2 - y1;
//
//   return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
// }
//
// // function Ball(x, y, dy, radius, max, color) {
// //   this.x = x;
// //   this.y = y;
// //   this.dy = dy;
// //   this.radius = radius;
// //   this.max = max;
// //   this.color = color;
// //
// //   this.update = (platforms) => {
// //
// //     platforms.forEach((platform) => {
// //       if (distance(this.x, this.y, platform.x, platform.y) - this.radius*2 < 0) {
// //         this.collision();
// //         // this.dy = -this.dy;
// //         // this.dy -= 0.3;
// //         // console.log("jump");
// //       } else {
// //         this.dy +=0.3;
// //       }
// //     });
// //
// //     //
// //     // if (this.y + this.radius > canvas.height) {
// //     //   this.dy = -this.dy;
// //     // } else {
// //     //   this.dy += 0.01;
// //     // }
// //     this.y += this.dy;
// //     this.max += this.dy;
// //
// //     this.draw();
// //   };
// //
// //   this.collision = () => {
// //     this.dy = -this.dy;
// //   };
// //
// //   this.draw = () => {
// //     c.beginPath();
// //     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
// //     c.fillStyle = this.color;
// //     c.fill();
// //     c.closePath();
// //   };
// // }
// //
// // function Platform(x, y, width, height, color) {
// //   this.x = x;
// //   this.y = y;
// //   this.width = width;
// //   this.height = height;
// //   this.color = color;
// //
// //   this.draw = () => {
// //     c.fillStyle= this.color;
// //     c.fillRect(this.x, this.y, this.width, this.height);
// //   };
// //
// //
// // }
//
// addEventListener('mousemove', (e) => {
//   BB.x = event.clientX;
// });
//
//
// let ball;
// let plat1;
// let plat2;
// let plat3;
// let platforms;
// let currentPlatform;
// function init() {
//   BB = new Jumper(300, 100, 3, 20, 2, 'blue', c);
//   platforms = [];
//   for (let i = 0; i < 15; i++) {
//     let p = new Platform(c);
//     platforms.push(p.startingPlat());
//   }
// }
//
// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, canvas.width, canvas.height);
//   BB.update(platforms, c);
//   for (let i = 0; i < platforms.length; i++) {
//     platforms[i].update(c);
//   }
//
// }
//
//
//
// init();
//
// animate();


/***/ })
/******/ ]);
//# sourceMappingURL=bungeeBob.js.map