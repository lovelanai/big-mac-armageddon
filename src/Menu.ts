//Menu class used to create the start menu and game over menu.
class Menu implements Visual {
    //insert parameters necessary for both menus
    protected message: string;

    constructor(message: string) {
        this.message = message;
    }

    update(): void {
        if (keyIsDown(ENTER)) {
            console.log('game init')
            game.setState(new GameEngine());
            sound.backGroundMusic.loop();
            sound.deathSong.stop();
            sound.winSong.stop();
        }
    }

    draw(): void {
        // Blinking text
        if (frameCount % 100 < 30) {
            fill(241, 163, 10, 0)
        } else {
            fill(241, 163, 10)
            textSize(40)
            text(`${this.message}`, 640, 460);
        }
    }
}

class StartMenu extends Menu {

    draw(): void {
        //Menu text
        image(images.bloodBackground, 0, 0)
        image(images.ronaldMenu, 785, 485)
        fill(241, 163, 10)
        textAlign(CENTER)
        textSize(130)
        textFont(fonts.mcLawsuit)
        text('M', 680, 200)
        textSize(120)
        textFont(fonts.roboto)
        text('Big      ac', 640, 200)
        textSize(70)
        textFont(fonts.pressStart2p)
        fill(43, 69, 147)
        text('ARMAGEDDON', 648, 300)
        fill(241, 163, 10)
        text('ARMAGEDDON', 640, 300)
        super.draw();

    }
}


//GAME OVER MENU

class GameOverMenu extends Menu {
    private deathBalloony = 600;
    private deathBalloonx = 50;

    draw(): void {

        //Menu text
        image(images.hell, 0, 0)
        image(images.graveyard, 0, 200)
        image(images.ronaldDead, 450, 400)
        image(images.deathBalloon, this.deathBalloonx, this.deathBalloony);

        fill(241, 163, 10, 40)
        textAlign(CENTER)
        textSize(15)
        textFont(fonts.roboto)
        text('try  A, G, L', 55, 20)
        textSize(70)
        textFont(fonts.pressStart2p)
        fill(184, 6, 0)
        text('YOU DIED', 648, 300)
        fill(241, 163, 10)
        text('YOU DIED', 640, 300)
        super.draw();
        deathCounter.draw();
    }

    update(): void {

        this.deathBalloony -= 2;
        this.deathBalloonx = 30 * Math.sin(this.deathBalloony * 0.03) + 100;
        super.update();
    }
}

class WinMenu extends Menu {
    private textScrolly = 1100;
    private timer = 0;


    private Balloonx = 50;
    private Balloony = 900;


    private Ronaldx = 0;
    private Ronaldy = 300;

    draw(): void {

        //Menu text
        background(0)

        // Ronald
        image(images.happyronald, this.Ronaldx + 900, this.Ronaldy)
        image(images.happyronaldRight, this.Ronaldx, this.Ronaldy)

        // Moving end credits
        textFont(fonts.pressStart2p)

        // Categories

        textSize(40)

        fill(255)
        text('GAME CREATED BY', 640, this.textScrolly)
        // 150
        text('LEVEL GENERATOR & DESIGN', 640, this.textScrolly + 500)

        text('MENUS AND SMÅPILL', 640, this.textScrolly + 800)

        text('PLAYER MOVEMENT + MUSIC', 640, this.textScrolly + 1050)

        text('GAME ENGINE + COLLISION', 640, this.textScrolly + 1300)

        text('ENEMIES', 640, this.textScrolly + 1550)

        textSize(50)
        text('Credits', 640, this.textScrolly + 1850)

        // text('test-endcredits 2', 640, this.textScrolly)

        // Names
        fill(255)
        textSize(30)

        // Game created by
        text('LOVE LANAI', 640, this.textScrolly + 100)
        text('ADRIAN RYDIN', 640, this.textScrolly + 150)
        text('PHILIP RISBERG', 640, this.textScrolly + 200)
        text('SIMON ERIKSSON', 640, this.textScrolly + 250)
        text('JOSEF KARLSSON', 640, this.textScrolly + 300)
        text('ISAAQ GULEED', 640, this.textScrolly + 350)
        // 150

        // Level generator & design
        text('ADRIAN RYDIN', 640, this.textScrolly + 600)
        text('SIMON ERIKSSON', 640, this.textScrolly + 650)

        // Menu and småpill
        text('PHILIP RISBERG', 640, this.textScrolly + 900)

        // Player movement + music
        text('LOVE LANAI', 640, this.textScrolly + 1150)

        // Game engine + collision
        text('JOSEF KARLSSON', 640, this.textScrolly + 1400)

        // Enemies
        text('ISAAQ GULEED', 640, this.textScrolly + 1650)

        // credits
        textSize(40)
        text('CHARACTER DESIGN', 640, this.textScrolly + 1950)
        textSize(25)
        text('Treasure Co. Ltd', 640, this.textScrolly + 2000)

        // You won text + box
        fill(0)
        rect(0, 0, width, 230)
        fill(241, 163, 10, 40)
        textAlign(CENTER)
        textSize(70)
        textFont(fonts.pressStart2p)
        fill(43, 69, 147)
        text('YOU WON!', 648, 200)
        fill(241, 163, 10)
        text('YOU WON!', 640, 200)

        // Balloons
        image(images.balloons, this.Balloonx, this.Balloony)
        image(images.balloonbear, this.Balloonx + 900, this.Balloony + 100)

        //play again text
        if (this.timer >= 1970) {
            textSize(40)
            fill(241, 163, 10);
            text('Congratulations...', 640, 350);
            if (frameCount % 100 < 30) {
                fill(241, 163, 10, 0);
            } else {
                fill(241, 163, 10);
                text(`${this.message}`, 640, 465);
            }
        } else {
            textSize(40)
            text(`Congratulations...`, 640, this.textScrolly + 2200);
        }
        // deathCounter.draw();
    }

    update(): void {
        this.timer++
        if (this.timer >= 1770) {
            this.Ronaldy += 5
        }
        if (this.timer >= 1970 && this.Balloony <= -600){
            this.Balloony = -500
        }
        sound.backGroundMusic.stop();
        document.getElementById('volumeBtn')!.style.display = 'none';
        this.textScrolly -= 1.5;
        this.Balloony -= 2;
        this.Balloonx = 30 * Math.sin(this.Balloony * 0.03) + 100;
        if(this.Balloony < -600){
            this.Balloony = 900
        }
        super.update();
    }
}