const Game = require('./game.js');

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
