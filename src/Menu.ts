//Menu class used to create the start menu and game over menu.

class Menu implements Visual {
    //insert parameters necessary for both menus
    message: string;
    init = false;

    constructor(message: string) {
        this.message = message;
        const dummyEngine = new GameEngine(5);
        let whichMenu = this;
        game = new Game(dummyEngine);

        window.addEventListener('keyup', initFunction)

        function initFunction() {
            if (whichMenu.init === false) {
                if (keyCode === ENTER) {
                    console.log('game init')
                    whichMenu.init = true
                } else {
                    return;
                }
            }
        }
    }

    update(): void {
        if (this.init) {
            game.update();
        }
    }

    draw(): void {

        if (this.init) {
            game.draw();
        } else {
            //Menu text
            background(222, 6, 18)
            fill(241, 163, 10)
            textAlign(CENTER)
            textSize(110)
            textFont(fonts.mcLawsuit)
            text('M', 680, 150)
            textSize(100)
            textFont(fonts.roboto)
            text('Big      ac', 640, 150)
            textSize(70)
            textFont(fonts.pressStart2p)
            fill(43, 69, 147)
            text('Armageddon', 648, 240)
            fill(241, 163, 10)
            text('Armageddon', 640, 240)

            if (frameCount % 100 < 30) {
                fill(241, 163, 10, 0)
            } else {
                fill(241, 163, 10)
                textSize(40)
                text(`${this.message}`, 640, 360);
            }
        }
    }
}