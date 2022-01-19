/// <reference path="Game.ts" />
/// <reference path="Player.ts" />

//---- GLOBAL VARIABLES ----//
let game: Game;
//sprite-sheet (player)
let idleLeft: p5.Image;
let idleRight: p5.Image;
let runLeft: p5.Image;
let runRight: p5.Image;
let jumpLeft: p5.Image;
let jumpRight: p5.Image;
// Assets for enemy
let enemyAsset: p5.Image;
// let sound: p5.SoundFile


/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    /** sprite sheet (player) */
    idleLeft = loadImage('./assets/images/ronald/idle-left.png')
    idleRight = loadImage('./assets/images/ronald/idle-right.png')
    runLeft = loadImage('./assets/images/ronald/run-left.png')
    runRight = loadImage('./assets/images/ronald/run-right.png')
    jumpLeft = loadImage('./assets/images/ronald/jump-left.png')
    jumpRight = loadImage('./assets/images/ronald/jump-right.png')
    enemyAsset = loadImage('./assets/images/enemy/bk-hat.png')

    // sound: p5.SoundFile = loadSound('../assets/mySound.wav');
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(1280, 720);
    frameRate(60);
    // noCursor();

    
    const dummyEngine = new GameEngine(5);
    game = new Game(dummyEngine);
}


/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    background('white');
    game.update();
    game.draw();


    // game.draw();
}




