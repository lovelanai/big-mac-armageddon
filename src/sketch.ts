//---- GLOBAL VARIABLES ----//
let game: Game;
//sprite-sheet (player)
let images: Images;

let sequences: Sequences;
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
        bkFries: loadImage('./assets/images/enemy/bk-fries.png'),
        bkHat: loadImage('./assets/images/enemy/bk-hat.png'),
    }

    sequences = {

        idle: [
            loadImage('./assets/images/ronald/idle-left/0.png'),
            loadImage('./assets/images/ronald/idle-left/1.png'),
            loadImage('./assets/images/ronald/idle-left/2.png'),
            loadImage('./assets/images/ronald/idle-left/3.png'),
            loadImage('./assets/images/ronald/idle-left/4.png'),
            loadImage('./assets/images/ronald/idle-left/5.png'),
            loadImage('./assets/images/ronald/idle-left/6.png'),
            loadImage('./assets/images/ronald/idle-left/7.png'),
            loadImage('./assets/images/ronald/idle-left/8.png')
        ],

        // idleRight: [
        //     loadImage('./assets/images/ronald/idle-right/0.png'),
        //     loadImage('./assets/images/ronald/idle-right/1.png'),
        //     loadImage('./assets/images/ronald/idle-right/2.png'),
        //     loadImage('./assets/images/ronald/idle-right/3.png'),
        //     loadImage('./assets/images/ronald/idle-right/4.png'),
        //     loadImage('./assets/images/ronald/idle-right/5.png'),
        //     loadImage('./assets/images/ronald/idle-right/6.png'),
        //     loadImage('./assets/images/ronald/idle-right/7.png'),
        //     loadImage('./assets/images/ronald/idle-right/8.png')
        // ],


        walkLeft: [
            loadImage('./assets/images/ronald/walk-left/0.png'),
            loadImage('./assets/images/ronald/walk-left/1.png'),
            loadImage('./assets/images/ronald/walk-left/2.png'),
            loadImage('./assets/images/ronald/walk-left/3.png'),
            loadImage('./assets/images/ronald/walk-left/4.png'),
            loadImage('./assets/images/ronald/walk-left/5.png')
        ],

        walkRight: [
            loadImage('./assets/images/ronald/walk-right/0.png'),
            loadImage('./assets/images/ronald/walk-right/1.png'),
            loadImage('./assets/images/ronald/walk-right/2.png'),
            loadImage('./assets/images/ronald/walk-right/3.png'),
            loadImage('./assets/images/ronald/walk-right/4.png'),
            loadImage('./assets/images/ronald/walk-right/5.png')
        ],

        jumpLeft: [
            loadImage('./assets/images/ronald/jump-left/0.png'),
            loadImage('./assets/images/ronald/jump-left/1.png'),
            loadImage('./assets/images/ronald/jump-left/2.png'),
            loadImage('./assets/images/ronald/jump-left/3.png'),
        ],

        jumpRight: [
            loadImage('./assets/images/ronald/jump-right/0.png'),
            loadImage('./assets/images/ronald/jump-right/1.png'),
            loadImage('./assets/images/ronald/jump-right/2.png'),
            loadImage('./assets/images/ronald/jump-right/3.png'),
        ],

        die: [
            loadImage('./assets/images/ronald/die-left/0.png'),
            loadImage('./assets/images/ronald/die-left/1.png'),
            loadImage('./assets/images/ronald/die-left/2.png'),
            loadImage('./assets/images/ronald/die-left/3.png'),
            loadImage('./assets/images/ronald/die-left/4.png'),
            loadImage('./assets/images/ronald/die-left/5.png'),
            loadImage('./assets/images/ronald/die-left/6.png'),
            loadImage('./assets/images/ronald/die-left/7.png')
        ],

        // dieRight: [
        //     loadImage('./assets/images/ronald/die-right/0.png'),
        //     loadImage('./assets/images/ronald/die-right/1.png'),
        //     loadImage('./assets/images/ronald/die-right/2.png'),
        //     loadImage('./assets/images/ronald/die-right/3.png'),
        //     loadImage('./assets/images/ronald/die-right/4.png'),
        //     loadImage('./assets/images/ronald/die-right/5.png'),
        //     loadImage('./assets/images/ronald/die-right/6.png'),
        //     loadImage('./assets/images/ronald/die-right/7.png')
        // ],


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
    createCanvas(1280, 880);
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
    text(`(${mouseX}, ${mouseY})`, mouseX, mouseY);

    // game.draw();
}




