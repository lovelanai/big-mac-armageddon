/// <reference path="Game.ts" />
/// <reference path="Player.ts" />

//---- GLOBAL VARIABLES ----//
let game: Game;
// let sound: p5.SoundFile


/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
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

    game = new Game(new Entity(new p5.Vector(), new p5.Vector(), 'blue', true, true));
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */


function draw() {
    background('white');
    player.draw();
    

    game.update();
    // game.draw();
}




