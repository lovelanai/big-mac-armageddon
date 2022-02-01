/// <reference path ="GameEngine.ts"/>
//---- GLOBAL VARIABLES ----//
let game: Game;
//sprite-sheet (player)
let images: Images;

let sequences: Sequences;
// Assets for enemy
let enemyAsset: p5.Image;

// soundfiles
let sound: sound;

//Font
let fonts: Fonts;

//deathcounter
let deathCounter: DeathCounter;
let nrOfLives = 3;



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
        bkFries: loadImage('./assets/images/enemy/bk-fries.png'),
        bkHat: loadImage('./assets/images/enemy/bk-hat.png'),
        ballpit: loadImage('./assets/images/map/wooden-block.png'),
        gameBackground: loadImage('./assets/images/map/repeatingbackground.png'),
        ronaldMenu: loadImage('./assets/images/menu/ronald-start.png'),
        ronaldDead: loadImage('/assets/images/menu/ronald-dead.png'),
        graveyard: loadImage('/assets/images/menu/graveyard.png'),
        hell: loadImage('./assets/images/menu/hell.jpg'),
        deathBalloon: loadImage('./assets/images/menu/gameoverballoon.png'),
        bloodBackground: loadImage('./assets/images/menu/background.jpg'),
        dirtBlock: loadImage('./assets/images/map/dirtblock.jpg'),
        grassBlock: loadImage('./assets/images/map/grassblock.jpg'),
        invisBlock: loadImage('./assets/images/map/invis.png'),
        spikeBlock: loadImage('./assets/images/map/Spike.png'),
        spikeVerticalBlock: loadImage('./assets/images/map/spikevertical.png'),
        finalTopBlock: loadImage('./assets/images/map/topimage.jpg'),
        finalBottomBlock: loadImage('./assets/images/map/bottomimg.jpg'),
        checkPointBlock: loadImage('/assets/images/map/checkpoint.png')
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

    }

    sound = {
        backGroundMusic: new p5.SoundFile('./audioFiles/soundtrack.mp3'),
        jump: new p5.SoundFile('./audiofiles/jump.wav'),
        deathSong: new p5.SoundFile('/audiofiles/game-over.mp3')
    }


    // var audioElement = document.createElement('audio');
    // audioElement.setAttribute('src', '..\audioFiles\soundtrack.mp3');
    // audioElement.load();
    // audioElement.addEventListener("load", function(){
    //     audioElement.play();
    // }, true);
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

    game = new Game(new StartMenu('Press Enter to start!'));


}


/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
let minFR = 100
let fr = 60
let minFRCountdown = 0;
function draw() {
    background('white')
    
    game.draw();
    game.update();
    //text(`(${mouseX}, ${mouseY})`, mouseX, mouseY);
    // game.draw();

    //Show framerate
    minFRCountdown = (minFRCountdown + 1) % 60;
    fr = 1000 / deltaTime
    minFR = minFRCountdown === 0 ? 100 : min(minFR, fr);
    push();
    textSize(16);
    textAlign(LEFT)
    text(fr, 0, 16);
    text(minFR, 0, 32);
    pop();
}

