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

    const dummyBlock = new Entity(new p5.Vector(1060, 300), new p5.Vector(100, 50), 'blue', true, false);
    debugger;
    const dummyEngine = new GameEngine(5);
    dummyEngine.entities.add(player);
    dummyEngine.entities.add(dummyBlock);
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
    player.draw();


    // game.draw();
}




