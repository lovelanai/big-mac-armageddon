//Menu class that is used to create the start menu and game over menu.

class Menu implements Visual {
    //insert parameters necessary for both menus
    message: string;

    constructor(message: string) {
        this.message = message
        if (this.message === 'Press Enter to start!') {
            //initialize game, fill lives
            console.log('startmenu')
        } else {
            
        console.log('gameOverMenu')
        }

    }
    update(): void {
    }

    draw(): void {
        
        //Menu text
        background(222, 6, 18)
        fill(241, 163, 10)
        textAlign(CENTER)
        textSize(100)
        textFont(fonts.mcLawsuit)
        text('M', 685, 160)
        textFont(fonts.roboto)
        text('Big      ac', 640, 160)
        textSize(70)
        textFont(fonts.pressStart2p)
        fill(43, 69, 147)
        text('Armageddon', 648, 240)
        fill(241, 163, 10)
        text('Armageddon', 640, 240)

        if (frameCount % 100 < 50) {
            fill(241, 163, 10, 0)
        } else {
            fill(241, 163, 10)
            textSize(40)
            text(`${this.message}`, 640, 360);
        }
    }
}