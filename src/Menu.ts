//Menu class used to create the start menu and game over menu.
class Menu implements Visual {
    //insert parameters necessary for both menus
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    update(): void {
        if (keyCode === ENTER) {
            console.log('game init')
            game.setState(new GameEngine(3));
            sound.backGroundMusic.loop();
            sound.deathSong.stop();
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
    }

    update(): void {

        this.deathBalloony -= 2;
        this.deathBalloonx = 30 * Math.sin(this.deathBalloony * 0.03) + 100;
        super.update();
    }
}

