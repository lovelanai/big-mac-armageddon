//---- GLOBAL VARIABLES ----//
let game: Game;
//sprite-sheet (player)
let images: Images;
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
    images = {
        idleLeft: loadImage('./assets/images/ronald/idle-left.gif'),
        idleRight: loadImage('./assets/images/ronald/idle-right.gif'),
        runLeft: loadImage('./assets/images/ronald/walk-left.png'),
        runRight: loadImage('./assets/images/ronald/walk-right.gif'),
        jumpLeft: loadImage('./assets/images/ronald/jump-left.gif'),
        jumpRight: loadImage('./assets/images/ronald/jump-right.gif'),
        enemyAsset: loadImage('./assets/images/enemy/bk-hat.png'),
    }
   

    // sound: p5.SoundFile = loadSound('../assets/mySound.wav');
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(1280, 550);
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




