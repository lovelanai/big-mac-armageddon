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
    
    game = new Game(new Entity([1],1,3,3,'blue',true));
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    background('white');
    console.log('sketch.ts')


    // game.update();
    // game.draw();
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}