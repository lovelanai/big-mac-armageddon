/// <reference path ="GameEngine.ts"/>
//---- GLOBAL VARIABLES ----//
let game: Game;
//sprite-sheet (player)
let images: Images;

let sequences: Sequences;
// Assets for enemy
let enemyAsset: p5.Image;
// let sound: p5.SoundFile

//Menus
let startMenu: Menu;
let gameOverMenu: Menu;
let fonts: Fonts;



/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {

    /** Fonts */
    fonts = {
        roboto: loadFont('./assets/fonts/Roboto-Regular.ttf'),
        mcLawsuit: loadFont('./assets/fonts/mclawsui.ttf'),
        pressStart2p: loadFont('./assets/fonts/PressStart2P-Regular.ttf')
    }

    /** sprite sheet (player) */
    images = {

        enemyAsset: loadImage('./assets/images/enemy/bk-hat.png'),
        ballpit: loadImage('./assets/images/map/wooden-block.png')
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


    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '..\audioFiles\soundtrack.mp3');
    audioElement.load();
    audioElement.addEventListener("load", function(){
        audioElement.play();
    }, true);
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

    game = new Game(new Menu('Press Enter to start!'));
}


/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    background('white');

    game.draw();
    game.update();


    text(`(${mouseX}, ${mouseY})`, mouseX, mouseY);

    // game.draw();
}




