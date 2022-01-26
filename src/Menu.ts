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
        }
    }

    draw(): void {
        //Menu text
        background(222, 6, 18)
        image(images.ronaldMenu, 750, 485)
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
        text('Armageddon', 648, 300)
        fill(241, 163, 10)
        text('Armageddon', 640, 300)

        if (frameCount % 100 < 30) {
            fill(241, 163, 10, 0)
        } else {
            fill(241, 163, 10)
            textSize(40)
            text(`${this.message}`, 640, 460);
        }
    }
}

